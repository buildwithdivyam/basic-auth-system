const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected with DB!");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectToDB;
