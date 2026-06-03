const express = require("express");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Authentication API is running successfully!");
});

app.use("/auth", authRouter);

module.exports = app;
