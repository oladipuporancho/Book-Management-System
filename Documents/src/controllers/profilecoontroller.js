const User = require('../models/User');

// View Profile
exports.viewProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Profile
exports.updateProfile = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const updates = { username, email };
        if (password) {
            updates.password = await bcrypt.hash(password, 10);
        }
        const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Profile
exports.deleteProfile = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};