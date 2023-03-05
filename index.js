const express = require("express");
const connection = require("./config/db");
const router = require("./Route/router");
const app = express();
var cors = require("cors");
var path = require("path");
app.use(cors());

app.use(express.json());

app.use("/api/", router);

app.use(express.static(path.join(__dirname, "./urlshortner/build")));

app.get("*", (_, res) => {
  res.sendFile(
    path.join(__dirname, "./urlshortner/build/index.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("listening on port 3000");
  connection();
});

// unshorted Array,2 sum
