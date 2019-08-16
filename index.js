const express = require("express");
const Joi = require('joi');

var app = express();

app.use(express.json());

const port = process.env.PORT || 3000

const accounts = [
  {id: 1, name: "Yugi"},
  {id: 2, name: "Kaiba"},
  {id: 3, name: "Joey"}
]

const threads = [
  {id: 1, account_id: 1, title: "Yugi Post 1"},
  {id: 2, account_id: 2, title: "Kaiba Post 1"},
  {id: 3, account_id: 3, title: "Joey Post 1"}
]

const posts = [
  {id: 1, account_id: 1, post_id: 1, text: "Dark Magician is the best!"},
  {id: 2, account_id: 2, post_id: 1, text: "No, Blue-Eyes is the best!"},
  {id: 3, account_id: 3, post_id: 3, text: "Time-wizard!"}
]

app.listen(port, () => {
   console.log(`server on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello good sir!");
})

app.get("/api/accounts", (req, res) => {
  res.send(accounts);
})

app.get("/api/accounts/:id", (req, res) => {
  let account = accounts.find(c => c.id === parseInt(req.params.id))
  if (!account) {
    res.status(404).send('The account with the given ID was not found')
  } else {
    res.send(account)
  }
})

app.post("/api/accounts", (req, res) => {
  const schema = {
    name: Joi.string().min(2).required()
  }

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }

  let account = {
    id: accounts.length + 1,
    name: req.body.name
  }
  accounts.push(account)
  res.send(account);
})

app.put("/api/accounts/:id", (req, res) => {
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

app.delete("/api/accounts/:id", (req, res) => {
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
