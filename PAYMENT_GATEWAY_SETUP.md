# Payment Gateway Setup Guide

## Overview
Your payment gateway has been corrected and improved with the following features:
- ✅ Secure Razorpay integration
- ✅ Database persistence (MongoDB)
- ✅ Webhook support for payment verification
- ✅ Proper error handling and validation
- ✅ Refund functionality
- ✅ Payment history tracking

## Setup Instructions

### 1. Environment Variables
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

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### 2. Get Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login to your account
3. Go to Settings > API Keys
4. Generate Test API Keys
5. Copy the Key ID and Key Secret to your `.env` file

### 3. Database Models

Two new models have been created:
- **Payment Model**: Stores payment transactions
- **Booking Model**: Stores booking details linked to payments

### 4. API Endpoints

#### Payment Routes (`/api/payments`)

- `POST /create-intent` - Create payment order
- `POST /confirm` - Confirm payment after Razorpay checkout
- `GET /history` - Get user's payment history
- `POST /refund/:paymentId` - Process refund
- `POST /webhook` - Razorpay webhook handler

#### Example Usage

**Create Payment Intent:**
```javascript
const response = await fetch('/api/payments/create-intent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    amount: 50000, // Amount in paise (₹500.00)
    currency: 'INR',
    destination: {
      name: 'Goa',
      basePrice: 50000
    },
    customerDetails: {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+919876543210'
    }
  })
});
```

**Confirm Payment:**
```javascript
const response = await fetch('/api/payments/confirm', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    order_id: 'order_123',
    payment_id: 'pay_123',
    signature: 'signature_123'
  })
});
```

### 5. Frontend Integration

The PaymentModal component has been updated with:
- Better error handling
- Razorpay SDK integration
- Mock payment support for development
- Improved user experience

### 6. Webhook Setup

To set up webhooks in Razorpay:

1. Go to Razorpay Dashboard > Settings > Webhooks
2. Add webhook URL: `https://yourdomain.com/api/payments/webhook`
3. Select events: `payment.captured`, `payment.failed`, `order.paid`
4. Copy the webhook secret to your `.env` file

### 7. Security Features

- ✅ No hardcoded API keys
- ✅ Environment variable validation
- ✅ Signature verification for payments
- ✅ Webhook signature verification
- ✅ User authentication required for all payment operations

### 8. Error Handling

The system now includes comprehensive error handling for:
- Invalid payment data
- Razorpay API errors
- Database connection issues
- Signature verification failures
- Network timeouts

### 9. Development vs Production

**Development Mode:**
- Uses mock payments when Razorpay credentials are not configured
- Detailed logging for debugging
- Relaxed CORS settings

**Production Mode:**
- Requires valid Razorpay credentials
- Webhook verification enabled
- Secure error messages
- Proper logging

### 10. Testing

**Test Payment Flow:**
1. Start your backend server
2. Start your frontend application
3. Navigate to a destination booking
4. Fill in customer details
5. Click "Pay" to test the payment flow

**Test Cards (Razorpay Test Mode):**
- Card Number: 4111 1111 1111 1111
- CVV: Any 3 digits
- Expiry: Any future date

### 11. Troubleshooting

**Common Issues:**

1. **"Razorpay SDK not loaded"**
   - Ensure the Razorpay script is loaded in index.html
   - Check browser console for script loading errors

2. **"Payment verification failed"**
   - Check if Razorpay credentials are correct
   - Verify webhook secret is configured
   - Check server logs for detailed error messages

3. **"User not authenticated"**
   - Ensure user is logged in
   - Check if JWT token is valid
   - Verify Authorization header is sent

4. **Database connection issues**
   - Check MongoDB connection string
   - Ensure MongoDB is running
   - Verify database permissions

### 12. Production Checklist

Before going live:
- [ ] Replace test API keys with live keys
- [ ] Set up webhook URL in Razorpay dashboard
- [ ] Configure proper CORS settings
- [ ] Set up SSL certificate
- [ ] Test payment flow thoroughly
- [ ] Set up monitoring and logging
- [ ] Configure backup and recovery

## Support

If you encounter any issues:
1. Check the server logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test with Razorpay test credentials first
4. Check the browser console for frontend errors

Your payment gateway is now production-ready with proper security, error handling, and database integration!
