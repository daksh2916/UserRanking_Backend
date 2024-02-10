

const User = require("../models/User");
const Score = require("../models/Score");

exports.updateUserScore = async (req, res) => {
    try {
        const { userid, score } = req.body;

        if (!userid || !score) {
            return res.status(400).json({
                success: false,
                message: 'User ID and score are required'
            });
        }

        // Update User collection
        const updatedUser = await User.findOneAndUpdate(
            { userid },
            { updatedAt: new Date() }, // Update updatedAt to current time
            { new: true }
        );

        // Update Score collection
        const updatedScore = await Score.findOneAndUpdate(
            { userid },
            { score, updatedAt: new Date() }, // Update updatedAt to current time
            { new: true }
        );

        res.status(200).json({
            success: true,
            userData: updatedUser,
            scoreData: updatedScore,
            message: 'Score updated successfully'
        });
    } catch (err) {
        console.error('Error updating score:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

