const express = require('express');
const app=express();
const bodyparser= require('body-parser');
const router = require('./routes')
const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({extended:false}));
// parse application/json
app.use(express.json({ limit: "10mb" }));
// Testing api woking or not
app.get("/hello", (req, res) => {
    res.send("Hello, world!");
  });
// major routes
  app.use('/',router);
app.listen(4000);