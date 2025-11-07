const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            uniqure: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timeStamp: true,
    }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
