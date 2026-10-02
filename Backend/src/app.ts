const path = require("path");
const express = require("express");
import type { Request, Response, NextFunction } from "express";
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const PORT = process.env.PORT || 8000;
require("./db/conn");

const { userRouter, productsRouter } = require("./routes/");

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Frontend/build')));

app.get("/verification", auth, (req: Request, res: Response) => {});
app.use("", userRouter);
app.use("", productsRouter);



app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../Frontend/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
})