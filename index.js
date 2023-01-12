const express = require('express');
require("dotenv").config();
const cors = require('cors');
const connectDB = require('./Configs/db');
const movieRouter = require('./Routers/movieRouter');

const app = express();
app.use(cors());
app.use(express.json());


const uri = process.env.MONGODB_CONNECTION_STRING;

connectDB(uri);

app.use(express.urlencoded({ extended: true }));
app.use('/persons', movieRouter);
app.get('/', function (req, res) {
    res.sendFile("movies.html", { root: "./App" })
});

app.listen(() => {
    console.log('Site is online');
});