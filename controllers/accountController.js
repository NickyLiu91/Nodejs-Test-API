// var mongoose = require('mongoose');
var account = require('../models/accountModel.js');

exports.getAccount = (req, res) => {
  account.findById(req.params.accountId, (err, account) => {
    if (err) {
      res.send(err)
    }
    res.json(account)
  })
}

// app.get("/api/accounts/:id", (req, res) => {
//   let account = accounts.find(c => c.id === parseInt(req.params.id))
//   if (!account) {
//     res.status(404).send('The account with the given ID was not found')
//   } else {
//     res.send(account)
//   }
// })

exports.getAllAccount = (req, res) => {
  account.find({}, (err, accounts) => {
    if (err) {
      res.send(err)
    }
    res.json(accounts)
  })
}

// app.get("/", (req, res) => {
//   res.send("Hello good sir!");
// })

// app.get("/api/accounts", (req, res) => {
//   res.send(accounts);
// })
//

exports.createAccount = (req, res) => {
  const newAccount = new account(req.body)

  account.find({}, (err, accounts) => {
    if (err) {
      res.send(err)
    }
    res.json(account)
  })
}

// app.post("/api/accounts", (req, res) => {
//   const schema = {
//     name: Joi.string().min(2).required()
//   }
//
//   const result = Joi.validate(req.body, schema)
//
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message)
//     return;
//   }
//
//   let account = {
//     id: accounts.length + 1,
//     name: req.body.name
//   }
//   accounts.push(account)
//   res.send(account);
// })

exports.deleteAccount = (req, res) => {
  account.remove({
    _id: req.params.accountId
  }, (err) => {
    if (err) {
      res.send(err)
    }

    res.json({
      message: `account ${req.params.accountID} successfully deleted`
    })
  })
}

// app.put("/api/accounts/:id", (req, res) => {
//   let account = accounts.find(c => c.id === parseInt(req.params.id))
//
//   if (!account) {
//     res.status(404).send('The account with the given ID was not found')
//     return;
//   }
//
//   const schema = {
//     name: Joi.string().min(2).required()
//   }
//
//   const result = Joi.validate(req.body, schema)
//
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message)
//     return;
//   }
//
//   account.name = req.body.name;
//   res.send(account)
// })
//
// app.delete("/api/accounts/:id", (req, res) => {
//   let account = accounts.find(c => c.id === parseInt(req.params.id))
//
//   if (!account) {
//     res.status(404).send('The account with the given ID was not found');
//     return;
//   }
//   console.log(account)
//
//   const index = accounts.indexOf(account);
//   console.log(index)
//   accounts.splice(index, 1);
//
//   res.send(account)
// })
