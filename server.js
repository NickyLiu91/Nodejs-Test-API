var app = require('./app');
// const express = require("express");
// app.use(express.json());

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`server on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello good sir!");
})
