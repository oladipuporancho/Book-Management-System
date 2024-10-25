const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    // Check if authorization header is present
    if (!authHeader) {
        return res.status(403).json({ message: 'Access denied, token missing!' });
    }

    const token = authHeader.split(' ')[1];  // Extract the token from the "Bearer <token>" format

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token with secret
        req.user = decoded;  // Attach the decoded user info to the request
        next();  // Call the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};