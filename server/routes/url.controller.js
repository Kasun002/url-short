const config = require("config");
const validUrl = require("valid-url");

const { urlModel } = require("../models/url.model");

const shortUrlPrefix = config.get("shortUrlPrefix");

////////////////////////////////////////////////////////////////////////////////////
const saveShortUrl = async (req, res) => {
  const { longUrl } = req.body;
  const urlShortCode = shortCode(9); //Generated from my own function

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await urlModel.findOne({ longUrl });
      if (url) {
        res.status(200).json({ status: true, data: url, message: "This url already converted" });
      } else {
        const shortUrl = shortUrlPrefix + urlShortCode;
        url = new urlModel({
          longUrl,
          shortUrl,
          urlShortCode,
          date: new Date()
        });
        await url.save();
        res.status(200).json({ status: true, data: url });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: 'Server error occurred' });
    }
  } else {
    res.status(400).json({ status: false, message: "Incorrect URL format" });
  }
};

////////////////////////////////////////////////////////////////////////////////////

const getAllUrls = async (req, res) => {
  try {
    const urls = await urlModel.find();
    if (urls) {
      return res.status(200).json({ status: true, data: urls });
    } else {
      return res.status(404).json({ status: false, message: "No data found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: 'Server error occurred' });
  }
};

////////////////////////////////////////////////////////////////////////////////////

const shortCode = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = { saveShortUrl, getAllUrls };
