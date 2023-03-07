var express = require("express");
var router = express.Router();
const { callBack } = require("../util.js");

/* GET home page. */
router.post("/", async function (req, res, next) {
  // receive json file from req
  if (req.body.api_key != process.env.API_KEY) {
    return res.json({ error: "Invalid API key" });
  }
  data = req.body.data;
  const id = await callBack(data);
  return res.json({ nftId: id, message: "mint success" });
});

module.exports = router;
