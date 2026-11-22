/**
 * @fileoverview Mongoose schema and model definition for User accounts,
 * health profiles (blood type, allergies), and geographic locations.
 * Handles validation and password comparison methods.
 * 
 * @module models/User
 * @requires mongoose
 * @requires bcryptjs
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        match: [/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,50}$/, 'Please enter a valid full name (letters only, 2-50 characters)']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    bloodType: {
        type: String,
        required: [true, 'Blood type is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    allergies: {
        type: [String],
        default: [],
        validate: {
            validator: function (allergiesArray) {
                const allergyRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,30}$/; // Rejects array items containing numbers or gibberish formats
                return allergiesArray.every(allergy => 
                    allergyRegex.test(allergy) && !/(.)\1{3,}/.test(allergy)
                );
            },
            message: 'Allergies should only contain valid words separated by commas, without numbers or random characters.'
        }
    },
    location: {
        state: {
            type: String,
            required: [true, 'State location is required']
        }
    },
    height: {
        type: Number,
        default: null,
        min: [50, 'Height must be at least 50 cm'],
        max: [250, 'Height must be realistic (max 250 cm)']
    },
    weight: {
        type: Number,
        default: null,
        min: [20, 'Weight must be at least 20 kg'],
        max: [300, 'Weight must be realistic (max 300 kg)']
    },
    bmi: {
        type: Number,
        default: null
    },
    bmiCategory: {
        type: String,
        default: 'Not calculated'
    }
}, {
    timestamps: true
});

/**
 * Pre-save middleware hook.
 * 
 * @note Password hashing is explicitly handled in authRoutes.js prior to instantiation
 * to prevent double-hashing conflicts during user creation.
 * Modern Mongoose async hooks return promises implicitly—do NOT pass or call `next()`.
 */
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    // Reserved for model-level pre-save transformations if needed
});

/**
 * Instance method to compare candidate passwords with the stored hash.
 * Used during user login authentication.
 * 
 * @method matchPassword
 * @param {string} enteredPassword - Plaintext user input password to verify.
 * @returns {Promise<boolean>} True if candidate password matches stored bcrypt hash.
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;