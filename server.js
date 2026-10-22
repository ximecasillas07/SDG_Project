import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import statesRoutes from './src/routes/stateRoutes.js';
import bmiRoutes from './src/routes/bmiRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/states', statesRoutes);
app.use('/api/calculator', bmiRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});