#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up environment variables for Trip Planner...\n');

// Backend .env content
const backendEnvContent = `# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/trip_planner

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_2024
JWT_EXPIRE=7d

# Razorpay Configuration (Test Keys)
# Replace these with your actual Razorpay test credentials
RAZORPAY_KEY_ID=rzp_test_R65rS3t4vqO7i1
RAZORPAY_KEY_SECRET=test_secret_key_for_development
RAZORPAY_WEBHOOK_SECRET=test_webhook_secret

# CORS Configuration
FRONTEND_URL=http://localhost:5173
`;

// Frontend .env content
const frontendEnvContent = `# Frontend Environment Variables
VITE_API_URL=http://localhost:3000/api
VITE_RAZORPAY_KEY_ID=rzp_test_R65rS3t4vqO7i1
`;

// Create backend .env file
const backendEnvPath = path.join(__dirname, 'backend', '.env');
try {
  fs.writeFileSync(backendEnvPath, backendEnvContent);
  console.log('✅ Backend .env file created at:', backendEnvPath);
} catch (error) {
  console.log('⚠️  Could not create backend .env file:', error.message);
  console.log('Please create it manually with the following content:');
  console.log('\n' + backendEnvContent);
}

// Create frontend .env file
const frontendEnvPath = path.join(__dirname, 'frontend', 'trip-planner', '.env');
try {
  fs.writeFileSync(frontendEnvPath, frontendEnvContent);
  console.log('✅ Frontend .env file created at:', frontendEnvPath);
} catch (error) {
  console.log('⚠️  Could not create frontend .env file:', error.message);
  console.log('Please create it manually with the following content:');
  console.log('\n' + frontendEnvContent);
}

console.log('\n📝 Next Steps:');
console.log('1. Get your Razorpay test credentials from: https://dashboard.razorpay.com/');
console.log('2. Update the RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in both .env files');
console.log('3. Restart your backend and frontend servers');
console.log('4. The payment system will now work in mock mode until you add real credentials');

console.log('\n🔧 To get Razorpay credentials:');
console.log('1. Go to https://dashboard.razorpay.com/');
console.log('2. Sign up/Login to your account');
console.log('3. Go to Settings > API Keys');
console.log('4. Generate Test API Keys');
console.log('5. Copy the Key ID and Key Secret to your .env files');

console.log('\n🎯 Current Status:');
console.log('- Payment system is configured to work in mock mode');
console.log('- No real payments will be processed until you add real Razorpay credentials');
console.log('- The 400 Bad Request error should now be resolved');
