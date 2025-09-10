# Gemini AI Integration Setup

This guide will help you set up Gemini AI for intelligent trip suggestions in your Trip Planner application.

## 1. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## 2. Backend Environment Variables

Add the following to your `backend/.env` file:

```env
# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here
```

## 3. Install Required Package

Run the following command in your backend directory:

```bash
cd backend
npm install @google/generative-ai
```

## 4. Frontend Environment Variables

Add the following to your `frontend/trip-planner/.env.local` file:

```env
# Existing variables
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_API_BASE_URL=http://localhost:3000/api

# No additional frontend variables needed for Gemini AI
```

## 5. Restart Services

After adding the environment variables:

1. Restart your backend server
2. Restart your frontend development server

## 6. Test the Integration

1. Go to your trip creation page
2. Click "Get AI Travel Suggestions"
3. Describe your dream trip (e.g., "I want a relaxing beach vacation for 7 days with a budget of ₹50,000")
4. The AI will suggest destinations, budgets, and travel tips

## Features

### AI Trip Suggestions
- **Smart Destination Recommendations**: Based on your preferences and budget
- **Budget Estimates**: Detailed breakdown of costs
- **Travel Tips**: Practical advice for your chosen destination
- **Auto-fill Form**: Selected suggestions automatically populate the trip form

### Example Prompts
- "I want a mountain adventure trip for 5 days, budget ₹40,000"
- "Looking for a cultural city break in Europe for 10 days"
- "Beach vacation with family, 2 kids, 7 days, ₹80,000 budget"
- "Solo backpacking trip in Southeast Asia for 2 weeks"

## API Endpoints

- `GET /api/ai/status` - Check AI service status
- `POST /api/ai/suggestions` - Get trip suggestions (requires authentication)
- `POST /api/ai/budget-estimate` - Get detailed budget estimate (requires authentication)

## Troubleshooting

### Common Issues

1. **"Gemini API key not configured"**
   - Make sure `GEMINI_API_KEY` is set in your backend `.env` file
   - Restart the backend server after adding the key

2. **"Failed to get AI suggestions"**
   - Check your internet connection
   - Verify the API key is correct
   - Check backend console for detailed error messages

3. **AI responses are slow**
   - This is normal for AI processing
   - Responses typically take 3-10 seconds

### Fallback Behavior

If the AI service is unavailable, the system will show general suggestions for popular destinations like Goa and Kerala.

## Security Notes

- Never commit your API keys to version control
- Use environment variables for all sensitive data
- The Gemini API key should only be stored on the backend

## Cost Information

- Gemini API has a free tier with generous limits
- Check [Google AI Studio pricing](https://ai.google.dev/pricing) for current rates
- Monitor your usage in the Google AI Studio dashboard
