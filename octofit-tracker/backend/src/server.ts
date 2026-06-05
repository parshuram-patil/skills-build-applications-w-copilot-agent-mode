import express, { Express, Request, Response } from 'express';
import { connectDB } from './db';

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB().catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
});

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OctoFit Tracker API is running', timestamp: new Date().toISOString() });
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to OctoFit Tracker API' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`MongoDB connection: mongodb://localhost:27017/octofit-tracker`);
});

export default app;
