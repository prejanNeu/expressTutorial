const express = require('express');
const users = require('./USERS.json');
const fs = require('fs');
const userRouter = require('./routes/user');
const mongoose = require("mongoose");
const {logReqRes} = require('./middlewares')
const { connectMongoDb } = require('./connection');
const app = express();
const databaseUrl = 'mongodb+srv://Try:Prejan@cluster0.manu3yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

connectMongoDb(databaseUrl)
app.use(logReqRes("log.txt"));
app.use(express.json());

app.use("/users",userRouter);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`)
    
});

