# TripPlanner - Frontend Backend Connection Setup

## 🚀 Quick Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### 1. Backend Setup

```bash
cd major/backend

# Install dependencies
npm install

# Create .env file (if not exists)
echo "PORT=3000
MONGODB_URI=mongodb://localhost:27017/tripplanner
JWT_SECRET=your-super-secret-jwt-key-here-2024
JWT_EXPIRES=30d
NODE_ENV=development" > .env

# Start the backend server
npm run dev
```

### 2. Frontend Setup

```bash
cd major/frontend/trip-planner

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

### 3. Database Setup

Make sure MongoDB is running:
- **Local MongoDB**: Start MongoDB service
- **MongoDB Atlas**: Use your connection string in .env file

### 4. Test Connection

1. Open your browser to `http://localhost:5173`
2. Look for the "Backend Connection Test" button in the bottom-right corner
3. Click it to test if frontend can connect to backend
4. You should see: "✅ Backend connected successfully!"

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Trips
- `GET /api/trips` - Get user's trips
- `POST /api/trips` - Create new trip
- `PUT /api/trips/:id` - Update trip
- `DELETE /api/trips/:id` - Delete trip

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Destinations
- `GET /api/destinations` - Get destinations
- `POST /api/destinations` - Create destination

### Expenses
- `GET /api/expenses` - Get expenses
- `POST /api/expenses` - Create expense

## 🐛 Troubleshooting

### Backend Issues
1. **Port 3000 already in use**: Change PORT in .env file
2. **MongoDB connection failed**: Check if MongoDB is running
3. **JWT errors**: Verify JWT_SECRET in .env

### Frontend Issues
1. **CORS errors**: Backend CORS is configured for localhost:5173
2. **API calls failing**: Check if backend is running on port 3000
3. **Authentication issues**: Clear localStorage and login again

### Common Solutions
1. **Restart both servers** after making changes
2. **Check browser console** for error messages
3. **Verify network tab** for API call status
4. **Clear browser cache** if needed

## 📱 Features Now Connected

✅ User Registration & Login
✅ Trip Creation & Management
✅ Trip Listing & Details
✅ Trip Editing & Deletion
✅ Authentication & Authorization
✅ Real-time API Communication

## 🎯 Next Steps

1. Test user registration and login
2. Create your first trip
3. Explore all features
4. Check the connection test component

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify both servers are running
3. Test the connection using the test button
4. Check MongoDB connection
