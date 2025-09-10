# Razorpay Payment Gateway Setup

## 🚀 Quick Start

The payment gateway is now integrated with Razorpay! Here's how to set it up:

### 1. Get Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up or log in to your account
3. Go to **Settings** → **API Keys**
4. Generate your **Test Key ID** and **Test Key Secret**

### 2. Update Configuration

Update the file `major/backend/config/razorpay.js`:

```javascript
export const razorpayConfig = {
  key_id: 'rzp_test_YOUR_ACTUAL_KEY_ID',  // Replace with your actual key
  key_secret: 'YOUR_ACTUAL_SECRET_KEY',   // Replace with your actual secret
};
```

### 3. Test Payment Flow

1. **Start the backend server:**
   ```bash
   cd major/backend
   npm start
   ```

2. **Start the frontend:**
   ```bash
   cd major/frontend/trip-planner
   npm run dev
   ```

3. **Test the payment:**
   - Go to `/destinations`
   - Click "Book Now" on any destination
   - Fill in your details
   - Click "Pay" to open Razorpay checkout
   - Use test card: `4111 1111 1111 1111` (any future date, any CVV)

### 4. Test Cards for Development

| Card Number | CVV | Expiry | Description |
|-------------|-----|--------|-------------|
| 4111 1111 1111 1111 | Any | Any future date | Success |
| 5555 5555 5555 4444 | Any | Any future date | Success |
| 4000 0000 0000 0002 | Any | Any future date | Declined |

### 5. Production Setup

For production:

1. **Get Live Credentials:**
   - Switch to **Live Mode** in Razorpay Dashboard
   - Generate **Live Key ID** and **Live Key Secret**

2. **Set Environment Variables:**
   ```bash
   export RAZORPAY_KEY_ID=rzp_live_your_live_key_id
   export RAZORPAY_KEY_SECRET=your_live_secret_key
   ```

3. **Update Configuration:**
   ```javascript
   export const razorpayConfig = {
     key_id: process.env.RAZORPAY_KEY_ID,
     key_secret: process.env.RAZORPAY_KEY_SECRET,
   };
   ```

## 🎯 Features

- ✅ **Real Razorpay Integration**
- ✅ **Secure Payment Processing**
- ✅ **Payment Verification**
- ✅ **Booking Management**
- ✅ **Refund Support**
- ✅ **Payment History**
- ✅ **Beautiful UI**

## 🔧 API Endpoints

- `POST /api/payments/create-intent` - Create payment order
- `POST /api/payments/confirm` - Verify payment
- `GET /api/payments/history` - Get payment history
- `POST /api/payments/refund/:paymentId` - Process refund

## 🎨 UI Components

- **PaymentModal** - 3-step payment process
- **Bookings Page** - View and manage bookings
- **Destinations Page** - Book trips with "Book Now" buttons

## 🚨 Important Notes

- **Never commit real API keys** to version control
- **Use test credentials** for development
- **Verify payments** on the backend for security
- **Handle webhooks** for production use

## 📞 Support

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
