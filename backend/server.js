import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 3000;
app.listen(3000, () => {
    console.log("server is listening")
})