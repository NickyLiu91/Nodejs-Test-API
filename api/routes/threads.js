const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Thread = require('../models/thread')

// var thread1 = {title: "Yugi Post 1"}
// var thread2 = {title: "Kaiba Post 1"}
// var thread3 = {title: "Joey Post 1"}
//
// const threads = [
//   thread1,
//   thread2,
//   thread3
// ]

router.get("/api/threads", (req, res) => {
  res.send(threads);
})

router.get("/api/threads/:id", (req, res) => {
  let thread = accounts.find(c => c.id === parseInt(req.params.id))
  if (!thread) {
    res.status(404).send('The thread with the given ID was not found')
  } else {
    res.send(thread)
  }
})

router.post("/api/threads", (req, res) => {
  const thread = new Thread({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    text: req.body.text
  })
  thread.save().then( resuly => {console.log(result)})
  .catch(err => {console.log(error)});
})

router.put("/api/threads/:id", (req, res) => {
  let thread = accounts.find(c => c.id === parseInt(req.params.id))

  if (!thread) {
    res.status(404).send('The thread with the given ID was not found')
    return;
  }

  // const schema = {
  //   name: Joi.string().min(2).required()
  // }
  //
  // const result = Joi.validate(req.body, schema)

  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message)
  //   return;
  // }

  thread.name = req.body.name;
  res.send(thread)
})

router.delete("/api/threads/:id", (req, res) => {
  let thread = theads.find(c => c.id === parseInt(req.params.id))

  if (!thread) {
    res.status(404).send('The thread with the given ID was not found');
    return;
  }
  console.log(thread)

  const index = accounts.indexOf(thread);
  console.log(index)
  accounts.splice(index, 1);

  res.send(thread)
})
