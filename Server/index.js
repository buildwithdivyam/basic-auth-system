const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDB = require("./config/db.js");
const authRouter = require("./routes/auth.routes.js");
const cookiParser = require("cookie-parser");

dotenv.config();
connectToDB();

app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Heyy from SERVER!!");
});

app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});
