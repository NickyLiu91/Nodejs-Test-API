const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Account = require('../models/account')

var account1 = {name: "Yugi"}
var account2 = {name: "Kaiba"}
var account3 = {name: "Joey"}

const accounts = [
  account1,
  account2,
  account3
]

router.get("/api/accounts/:id", (req, res) => {
  let account = accounts.find(c => c.id === parseInt(req.params.id))
  if (!account) {
    res.status(404).send('The account with the given ID was not found')
  } else {
    res.send(account)
  }
})

router.get("/api/accounts", (req, res) => {
  res.send(accounts);
})

router.post("/api/accounts", (req, res) => {
  const account = new Account({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password
  })
  account.save().then( resuly => {console.log(result)})
  .catch(err => {console.log(error)});

  // const result = Joi.validate(req.body, schema)

  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message)
  //   return;
  // }
  //
  // let account = {
  //   id: accounts.length + 1,
  //   name: req.body.name
  // }
  // accounts.push(account)
  // res.send(account);
})

router.put("/api/accounts/:id", (req, res) => {
  let account = accounts.find(c => c.id === parseInt(req.params.id))

  if (!account) {
    res.status(404).send('The account with the given ID was not found')
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

  account.name = req.body.name;
  res.send(account)
})

router.delete("/api/accounts/:id", (req, res) => {
  let account = accounts.find(c => c.id === parseInt(req.params.id))

  if (!account) {
    res.status(404).send('The account with the given ID was not found');
    return;
  }
  console.log(account)

  const index = accounts.indexOf(account);
  console.log(index)
  accounts.splice(index, 1);

  res.send(account)
})

module.exports = router
