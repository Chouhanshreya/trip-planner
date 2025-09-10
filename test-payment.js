// Simple test script to verify payment system using Node.js built-in modules
const https = require('https');
const http = require('http');

function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (data) {
      const jsonData = JSON.stringify(data);
      options.headers['Content-Length'] = Buffer.byteLength(jsonData);
    }

    const req = http.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          resolve({ data: parsedData, status: res.statusCode });
        } catch (error) {
          resolve({ data: responseData, status: res.statusCode });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function testPayment() {
  try {
    console.log('🧪 Testing Payment System...\n');
    
    // Test 1: Create Order
    console.log('1️⃣ Testing order creation...');
    const orderResponse = await makeRequest('http://localhost:3000/api/payment/order', 'POST', {
      amount: 61500,
      currency: 'INR'
    });
    
    if (orderResponse.status === 200 && orderResponse.data.success) {
      console.log('✅ Order created successfully!');
      console.log('Order ID:', orderResponse.data.data.order_id);
      console.log('Amount:', orderResponse.data.data.amount);
      console.log('Currency:', orderResponse.data.data.currency);
      console.log('Message:', orderResponse.data.message);
      console.log('');
      
      // Test 2: Verify Payment (Mock)
      console.log('2️⃣ Testing payment verification...');
      const verifyResponse = await makeRequest('http://localhost:3000/api/payment/verify', 'POST', {
        order_id: orderResponse.data.data.order_id,
        payment_id: 'pay_mock_' + Date.now(),
        signature: 'mock_signature_' + Date.now()
      });
      
      if (verifyResponse.status === 200 && verifyResponse.data.success) {
        console.log('✅ Payment verified successfully!');
        console.log('Status:', verifyResponse.data.data.status);
        console.log('Message:', verifyResponse.data.message);
        console.log('');
        
        console.log('🎉 All tests passed! Payment system is working correctly.');
      } else {
        console.error('❌ Payment verification failed:', verifyResponse.data);
      }
    } else {
      console.error('❌ Order creation failed:', orderResponse.data);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testPayment();
