const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model.js");

module.exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized user" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await userModel.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized" });
    }
};
