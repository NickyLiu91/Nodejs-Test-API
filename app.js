const express = require('express');
const app = express();
const mongoose = require('mongoose');

const accountRoutes = require('./api/routes/accounts')

// var routes = require('./routes/index.js');

// const app = express();


// module.exports = app;

// const Joi = require('joi');
// const mongoose = require('mongoose');



app.use('/', accountRoutes)
app.use(express.json());
//

mongoose.connect("mongodb+srv://uthor123:anivia666@cluster0-hnegv.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`server on port ${port}`);
});

var account1 = {id: 1, name: "Yugi"}
var account2 = {id: 2, name: "Kaiba"}
var account3 = {id: 3, name: "Joey"}

const accounts = [
  account1,
  account2,
  account3
]

var thread1 = {id: 1, account_id: account1.id, title: "Yugi Post 1"}
var thread2 = {id: 2, account_id: account2.id, title: "Kaiba Post 1"}
var thread3 = {id: 3, account_id: account3.id, title: "Joey Post 1"}

const threads = [
  thread1,
  thread2,
  thread3
]

var post1 = {id: 1, account_id: account1.id, thread_id: thread1.id, text: "Dark Magician is the best!"}
var post2 = {id: 2, account_id: account2.id, thread_id: thread2.id, text: "No, Blue Eyes is the best!"}
var post3 = {id: 3, account_id: account3.id, thread_id: thread3.id, text: "Time Wizard!"}

const posts = [
  post1,
  post2,
  post3
]


// module.exports = (app) => {
//   app.route('/accounts')
//     .get(accounts.getAllAccount)
//     .post(accounts.createAccount)
//
//     app.route('/accounts/:accountId')
//       .get(account.getAccount)
//       .put(account.updateAccount)
//       .delete(account.deleteAccount)
// }

//middleware
// app.use('/', () => {
//   console.log("WOAH!")
// })

app.get("/", (req, res) => {
  res.send("Hello good sir!");
})

app.get("/api/threads", (req, res) => {
  res.send(threads);
})

app.get("/api/threads/:id", (req, res) => {
  let thread = accounts.find(c => c.id === parseInt(req.params.id))
  if (!thread) {
    res.status(404).send('The thread with the given ID was not found')
  } else {
    res.send(thread)
  }
})

app.post("/api/threads", (req, res) => {
  const schema = {
    name: Joi.string().min(2).required()
  }

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }

  let thread = {
    id: accounts.length + 1,
    name: req.body.name
  }
  accounts.push(thread)
  res.send(thread);
})

app.put("/api/threads/:id", (req, res) => {
  let thread = accounts.find(c => c.id === parseInt(req.params.id))

  if (!thread) {
    res.status(404).send('The thread with the given ID was not found')
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

  thread.name = req.body.name;
  res.send(thread)
})

app.delete("/api/threads/:id", (req, res) => {
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

app.get("/api/posts", (req, res) => {
  res.send(posts);
})

app.get("/api/posts/:id", (req, res) => {
  let post = accounts.find(c => c.id === parseInt(req.params.id))
  if (!post) {
    res.status(404).send('The post with the given ID was not found')
  } else {
    res.send(post)
  }
})

app.post("/api/posts", (req, res) => {
  const schema = {
    name: Joi.string().min(2).required()
  }

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }

  let post = {
    id: accounts.length + 1,
    name: req.body.name
  }
  accounts.push(post)
  res.send(post);
})

app.put("/api/posts/:id", (req, res) => {
  let post = accounts.find(c => c.id === parseInt(req.params.id))

  if (!post) {
    res.status(404).send('The post with the given ID was not found')
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

  post.name = req.body.name;
  res.send(post)
})

app.delete("/api/posts/:id", (req, res) => {
  let post = theads.find(c => c.id === parseInt(req.params.id))

  if (!post) {
    res.status(404).send('The post with the given ID was not found');
    return;
  }
  console.log(post)

  const index = accounts.indexOf(post);
  console.log(index)
  accounts.splice(index, 1);

  res.send(post)
})
