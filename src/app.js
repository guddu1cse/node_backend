import express from 'express';

import tutorialRoutes from './routes/tutorialRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/tutorials', tutorialRoutes);

export default app;
