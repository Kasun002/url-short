const config = require("config");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const { dbConnector } = require("./config/db.connector");
const { urlRouter } = require("./routes/url.router");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(morgan("combined"));// Log

dbConnector();

app.use(express.json());

app.use("/", urlRouter);

module.exports = {app};