/**
 * @fileoverview Express router for authentication routes.
 * 
 * @module routes/authRoutes
 * @requires express
 * @requires ../models/User.js
 */

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 
import { stateResources, defaultStateResource } from '../data/stateResources.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'sdg3_mexico_health_secret_key';

/**
- Middleware to verify JWT Bearer token on protected auth routes.
- 
- @function verifyToken
- @param {express.Request} req - Express request object.
- @param {express.Response} res - Express response object.
- @param {express.NextFunction} next - Express next middleware function.
 */

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            error: 'Access denied. No authentication token provided.'
        });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Invalid or expired session token. Please log in again.'
        });
    }
};

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, bloodType, allergies, location } = req.body;

        if (!name || !email || !password || !bloodType || !location?.state) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please fill out all required fields.' 
            });
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ 
                success: false, 
                error: 'An account with this email address already exists.' 
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            bloodType,
            allergies: allergies || [],
            location: { state: location.state }
        });

        const savedUser = await newUser.save();

        const token = jwt.sign(
            { id: savedUser._id, email: savedUser.email }, 
            JWT_SECRET, 
            { expiresIn: '7d' }
        );

        return res.status(201).json({
            success: true,
            message: 'Account registered successfully!',
            token,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                bloodType: savedUser.bloodType,
                allergies: savedUser.allergies,
                location: savedUser.location,
                height: savedUser.height,
                weight: savedUser.weight,
                bmi: savedUser.bmi,
                bmiCategory: savedUser.bmiCategory
            }
        });

    } catch (error) {
        console.error('Error during user signup:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message || 'Database error creating your account.' 
        });
    }
});

/**
 * Express route for user login.
 * 
 * @name POST/api/auth/login
 * @function
 * @param {express.Request} req - Express request object containing email and password.
 * @param {express.Response} res - Express response object.
 */
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please provide both email and password.' 
            });
        }

        //find user by email
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid email or password.' 
            });
        }

        //compare password using Mongoose schema method
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid email or password.' 
            });
        }

        //generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email }, 
            JWT_SECRET, 
            { expiresIn: '7d' }
        );

        return res.status(200).json({
            success: true,
            message: 'Logged in successfully!',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                bloodType: user.bloodType,
                allergies: user.allergies,
                location: user.location,
                height: user.height,
                weight: user.weight,
                bmi: user.bmi,
                bmiCategory: user.bmiCategory
            }
        });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message || 'Server error during login.' 
        });
    }
});

/**
- Express route to update an authenticated user's profile details.
- 
- @name PUT/api/auth/profile
- @function
- @param {express.Request} req - Express request object containing updated name, bloodType, allergies, and location.
- @param {express.Response} res - Express response object.
 */
router.put('/profile', verifyToken, async (req, res) => {
    try {
        const { name, bloodType, allergies, location } = req.body;

        if (!name || !bloodType || !location?.state) {
            return res.status(400).json({
                success: false,
                error: 'Name, blood type, and state location are required.'
            });
        }

        //normalize allergies array (accepts array or comma-separated string)
        let formattedAllergies = [];
        if (Array.isArray(allergies)) {
            formattedAllergies = allergies.map(item => item.trim()).filter(Boolean);
        } else if (typeof allergies === 'string' && allergies.trim() !== '') {
            formattedAllergies = allergies.split(',').map(item => item.trim()).filter(Boolean);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            {
                name: name.trim(),
                bloodType,
                allergies: formattedAllergies,
                location: { state: location.state }
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                error: 'User account not found.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Profile updated successfully!',
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                bloodType: updatedUser.bloodType,
                allergies: updatedUser.allergies,
                location: updatedUser.location,
                height: updatedUser.height,
                weight: updatedUser.weight,
                bmi: updatedUser.bmi,
                bmiCategory: updatedUser.bmiCategory
            }
        });

    } catch (error) {
        console.error('Error updating user profile:', error);
        const statusCode = error.name === 'ValidationError' ? 400 : 500;
        return res.status(statusCode).json({
            success: false,
            error: error.message || 'Server error updating profile.'
        });
    }
});

/**
 * Express route to calculate and persist a user's BMI.
 * 
 * @name POST/api/auth/update-bmi
 * @function
 * @param {express.Request} req - Express request object containing userId, heightCm, and weightKg.
 * @param {express.Response} res - Express response object.
 */
router.post('/update-bmi', async (req, res) => {
    try {
        const { userId, heightCm, weightKg } = req.body;

        if (!userId || !heightCm || !weightKg || heightCm < 50 || weightKg < 20) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please provide valid height (cm) and weight (kg).' 
            });
        }

        const heightMeters = heightCm / 100;
        const bmiValue = parseFloat((weightKg / (heightMeters * heightMeters)).toFixed(1));

        let category = '';
        if (bmiValue < 18.5) category = 'Underweight';
        else if (bmiValue < 24.9) category = 'Normal weight';
        else if (bmiValue < 29.9) category = 'Overweight';
        else category = 'Obesity';

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { 
                height: heightCm, 
                weight: weightKg, 
                bmi: bmiValue, 
                bmiCategory: category 
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }

        return res.status(200).json({
            success: true,
            message: 'BMI updated successfully!',
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                bloodType: updatedUser.bloodType,
                allergies: updatedUser.allergies,
                location: updatedUser.location,
                height: updatedUser.height,
                weight: updatedUser.weight,
                bmi: updatedUser.bmi,
                bmiCategory: updatedUser.bmiCategory
            }
        });

    } catch (error) {
        console.error('Error updating BMI:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message || 'Server error updating BMI.' 
        });
    }
});

export default router;