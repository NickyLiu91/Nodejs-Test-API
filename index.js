const express = require("express");
const Joi = require('joi');

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
  const schema = {
    name: Joi.string().min(2).required()
  }

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }

  let hero = {
    id: heroes.length + 1,
    name: req.body.name
  }
  heroes.push(hero)
  res.send(hero);
})

app.put("/api/heroes/:id", (req, res) => {
  let hero = heroes.find(c => c.id === parseInt(req.params.id))

  if (!hero) {
    res.status(404).send('The hero with the given ID was not found')
    return;
  }

  const schema = {
    name: Joi.string().min(2).required()
  }

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }

  hero.name = req.body.name;
  res.send(hero)
})

app.delete("/api/heroes/:id", (req, res) => {
  let hero = heroes.find(c => c.id === parseInt(req.params.id))

  if (!hero) {
    res.status(404).send('The hero with the given ID was not found');
    return;
  }
  console.log(hero)

  const index = heroes.indexOf(hero);
  console.log(index)
  heroes.splice(index, 1);

  res.send(hero)
})
