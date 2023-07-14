const jwt = require('jsonwebtoken');

// Middleware function to authenticate the Bearer JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.MYSECRETE, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    
    // Attach the decoded token to the request object for further use
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;