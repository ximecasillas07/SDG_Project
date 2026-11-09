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
                location: savedUser.location
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

export default router;