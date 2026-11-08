/**
 * @fileoverview Database connection module utilizing Mongoose ODM 
 * to connect to the MongoDB instance.
 * 
 * @module config/db
 * @requires mongoose
 */

import mongoose from 'mongoose';

/**
 * Connects to MongoDB using environment variables or a default local URI.
 * 
 * @async
 * @function connectDB
 * @returns {Promise<void>}
 */
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mexico_health_db');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};