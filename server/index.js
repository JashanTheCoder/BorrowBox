import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(
	cors({
		origin: ['http://localhost:5173', 'https://borrow-box-five.vercel.app'],
		credentials: true,
	})
);
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/ratings', ratingRoutes);

// Test route
app.get('/api/test', (req, res) => {
	res.json({ success: true, message: 'BorrowBox API is running!' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
