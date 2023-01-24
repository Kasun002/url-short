const express = require('express');
const { saveShortUrl, getAllUrls } = require("./url.controller");

const urlRouter = express.Router();

urlRouter.post("/short", saveShortUrl);
urlRouter.get("/all", getAllUrls);

module.exports = { urlRouter };

