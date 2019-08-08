const express = require("express");

var app = express();

app.use(express.json());

const port = process.env.PORT || 3000

const heroes = [
  {id: 1, name: "Superman"},
  {id: 2, name: "Batman"},
  {id: 3, name: "The Flash"}
]

app.listen(port, () => {
   console.log(`server on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello good sir!");
})

app.get("/api/heroes", (req, res) => {
  res.send(heroes);
})

app.get("/api/heroes/:id", (req, res) => {
  let hero = heroes.find(c => c.id === parseInt(req.params.id))
  if (!hero) {
    res.status(404).send('The hero with the given ID was not found')
  } else {
    res.send(hero)
  }
})

app.post("/api/heroes", (req, res) => {
  let hero = {
    id: heroes.length + 1,
    name: req.body.name
  }
  heroes.push(hero)
  res.send(hero);
})

app.put("/", (req, res) => {
  res.send(["Superman", "Batman Beyond", "The Flash"]);
})

app.delete("/", (req, res) => {
  res.send(["Superman", "Batman"]);
})
