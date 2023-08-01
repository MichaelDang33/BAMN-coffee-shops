const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const CoffeeShop = require('./models/coffeeShop')
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Connect to the database
require('./config/database');


app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.get('/coffeeshops', (req, res)=>{
  CoffeeShop.find({})
  .then((foundCoffeeShop) => {
      res.json(foundCoffeeShop)
  })
});

app.post('/coffeeshops', (req, res)=>{
  CoffeeShop.create(req.body)
  .then((createdShop)=>{
      res.json(createdShop)
  })
});

app.put('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedShop)=>res.json(updatedShop))
});

app.get('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findById(req.params.id)
  .then((foundShop)=>res.json(foundShop))
});


app.delete('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findByIdAndRemove(req.params.id)
  .then((deletedShop)=>res.json(deletedShop))
});

app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});

//  app.listen(port, function() {
//    console.log(`Express app running on port ${port}`)
//  });

 app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
