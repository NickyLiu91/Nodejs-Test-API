const express = require("express");

var app = express();

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`server on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello good sir!");
})

app.get("/api/heroes", (req, res) => {
  res.send(["Superman", "Batman", "The Flash"]);
})

app.post("/", (req, res) => {
  res.send(["Spiderman"]);
})

app.put("/", (req, res) => {
  res.send(["Superman", "Batman Beyond", "The Flash"]);
})

app.delete("/", (req, res) => {
  res.send(["Superman", "Batman"]);
})
