/**
 * @fileoverview Main express server for the Mexico Health Portal (ODS 3).
 * configures the global middlewares, serves static frontend files
 * and links the REST API routers.
 *
 * @module server
 * @requires express
 * @requires path
 * @requires url
 * @requires cors
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import statesRoutes from './src/routes/stateRoutes.js';
import bmiRoutes from './src/routes/bmiRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Enable Cross-Origin Resource Sharing (CORS) */
app.use(cors());
/** Parse incoming request */
app.use(express.json());
/** Parses URL-encoded data from traditional forms */
app.use(express.urlencoded({ extended: true }));
/** Static file server for the user interface (HTML, CSS, JS, images) */
app.use(express.static(path.join(__dirname, 'public')));

/** Endpoints for consulting health for the 32 states */
app.use('/api/states', statesRoutes);
/** Endpoints for BMI */
app.use('/api/calculator', bmiRoutes);

/**
 * a catch for redirecting every unknown route to the client's index.
 * @name get/*
 * @function
 * @param {express.Request} req - HTTP request object.
 * @param {express.Response} res - HTTP request object.
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});