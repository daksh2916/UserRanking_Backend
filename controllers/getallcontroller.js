const Score = require('../models/Score');
const User = require('../models/User');

exports.getUsersByScore = async (req, res) => {
    try {
        const scores = await Score.find(); // Remove date filtering

        const userScores = scores.reduce((accumulator, score) => {
            accumulator[score.userid] = (accumulator[score.userid] || 0) + score.score;
            return accumulator;
        }, {});

        // Convert userScores object into an array of { userid, totalScore } objects
        const sortedUsers = Object.keys(userScores)
            .map(userid => ({ userid, totalScore: userScores[userid] }));

        // Sort users based on totalScore in descending order
        sortedUsers.sort((a, b) => b.totalScore - a.totalScore);

        // Fetch user details for sorted users
        const usersMap = new Map();
        const users = await User.find({ userid: { $in: sortedUsers.map(user => user.userid) } });
        users.forEach(user => usersMap.set(user.userid.toString(), user));

        // Create response object with user details and total score
        const response = sortedUsers.map(({ userid, totalScore }) => ({
            name: usersMap.get(userid.toString()).name,
            totalScore
        }));

        res.status(200).json(response);
    } catch (err) {
        console.error("Error fetching users by score:", err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


