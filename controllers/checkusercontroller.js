const User = require('../models/User'); // Import your User model or access your database directly

const UserController = {
  async checkUserExists(req, res) {
    try {
      const userId = req.params.userId;

      // Check if user exists with the specified userId
      const user = await User.findOne({ userId });

      if (user) {
        // User with the specified userId exists
        return res.json({ exists: true });
      } else {
        // User with the specified userId does not exist
        return res.json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = UserController;
