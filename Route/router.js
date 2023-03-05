const express = require("express");
const modelUrl = require("../model/url.schema");

const router = express.Router();

const stringgenerator = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

router.get("/:param", async (req, res) => {
  try {
    // console.log(req.params);
    const data = await modelUrl.findOne({
      Short_url: req.headers.host + "/api/" + req.params.param,
    });
    // console.log(res);
    return res.redirect(data.Full_url);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  let short_url = req.headers.host + "/api/" + stringgenerator();
  try {
    let obj = { Full_url: req.body.Full_url, Short_url: short_url };
    const data = await modelUrl.create(obj);
    // console.log(data);
    // console.log(req.headers.host);
    res.status(200).send(data);
    // return res.status(200).send(obj);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
