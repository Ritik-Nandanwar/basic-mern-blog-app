const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
let BlogModel = require("./Model/blog");
app.listen(8080, () => {
  console.log("Conncted to server 8080");
});

// Configuring body parser middleware and cors
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//initialize connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/newDb").then(() => {
  console.log("KAMISAMA");
});

app.get("/", async (req, res) => {
  const data = await BlogModel.find().sort({ title: 1 });
  res.send(data);
});

app.post("/", (req, res) => {
  let blog1 = new BlogModel({
    title: req.body.title,
    body: req.body.body,
  });
  blog1
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
  res.send(req.body);
});
app.delete("/deleteBlog/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await BlogModel.findByIdAndDelete(req.params.id).then(
      console.log("deleted " + req.params.id)
    );
  } catch (err) {
    console.error(err);
  }
});
