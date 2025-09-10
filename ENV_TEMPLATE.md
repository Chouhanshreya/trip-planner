# Environment Variables Setup

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/trip_planner

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_your_test_key_id
RAZORPAY_KEY_SECRET=your_test_secret_key
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# Frontend Razorpay Key (for Payment component)
VITE_RAZORPAY_KEY_ID=rzp_test_your_test_key_id

# For production, use live keys:
# RAZORPAY_KEY_ID=rzp_live_your_live_key_id
# RAZORPAY_KEY_SECRET=your_live_secret_key

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

## How to get Razorpay credentials:

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login to your account
3. Go to Settings > API Keys
4. Generate Test API Keys
5. Copy the Key ID and Key Secret
6. Add them to your `.env` file

## Security Notes:

- Never commit `.env` files to version control
- Use test keys for development
- Use live keys only for production
- Keep your secret keys secure
