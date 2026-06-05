# OctoFit Tracker Multi-Tier Application

## Project Structure
```
octofit-tracker/
├── frontend/        # React 19 + Vite frontend
└── backend/         # Node.js + Express + TypeScript backend
```

## Ports Configuration

| Service | Port | URL |
|---------|------|-----|
| React Frontend | 5173 | http://localhost:5173 |
| Express Backend | 8000 | http://localhost:8000 |
| MongoDB | 27017 | mongodb://localhost:27017 |

## Frontend Setup

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8.0.16
- **Additional Libraries**:
  - React Router DOM
  - Bootstrap
  - React 19 and React DOM 19

### Start Frontend
```bash
cd octofit-tracker/frontend
npm run dev
```

## Backend Setup

- **Runtime**: Node.js with TypeScript
- **Framework**: Express 5.2.1
- **Database**: MongoDB with Mongoose 9.6.3
- **Dev Tools**: ts-node-dev for development with hot-reload

### Environment Variables
Create a `.env` file in the backend directory:
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

### Start Backend (Development)
```bash
cd octofit-tracker/backend
npm run dev
```

### Build Backend (Production)
```bash
cd octofit-tracker/backend
npm run build
npm start
```

## API Health Check
Once the backend is running, check the API status:
```
GET http://localhost:8000/api/health
```

## MongoDB Connection
The application expects MongoDB to be running on the default port 27017. Connection string: `mongodb://localhost:27017/octofit-tracker`
