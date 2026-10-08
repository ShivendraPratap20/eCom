const path = require("path");
//require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const fs = require("fs");
const PORT = process.env.PORT || 8000;
require("./db/conn");

const { userRouter, productsRouter } = require("./routes/");

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '../../Frontend/build')));

app.get("/verification", auth, (req, res) => {});
app.use("", userRouter);
app.use("", productsRouter);



app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../../Frontend/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
})