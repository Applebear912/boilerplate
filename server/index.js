const Promise = require("bluebird");
const express = require("express");
const models = require("./db/model");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.json());
app.use(express.static("dist"));
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Listening on port ${port}...`);
  }
});

app.post("/photo", (req, res) => {
  // console.log(req.body.data);
  console.log(req.body);

  models.savePhoto(req.body, (err, results) => {
    if (err) {
      // throw err;
      console.error(err);
      res.status(400).send("Issue inserting into photos.");
    } else {
      console.log(results);
      res.send("Received and added.");
    }
  });
});
