const checkRole = (roles) => {
    return (req, res, next) => {
      // Assuming you have a property called "role" in your user object
      const userRole = req.user.role;
  
      if (roles.includes(userRole)) {
        next(); // User has the required role, proceed to the next middleware
      } else {
        res.status(403).json({ message: 'access denied' }); // User does not have the required role, return 403 Forbidden
      }
    };
  };
  
  module.exports = checkRole;