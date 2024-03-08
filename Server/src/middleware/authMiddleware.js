// authMiddleware.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Superbase client
const supabase = createClient(process.env.SUPERBASE_URL, process.env.SUPERBASE_KEY);

// Middleware function for user authentication
async function authenticate(req, res, next) {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Authenticate user with Superbase
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    
    // If authentication fails, send error response
    if (error) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Store authenticated user details in request object
    req.user = user;

    // Call next middleware or route handler
    next();
  } catch (error) {
    // Handle any errors
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { authenticate };
