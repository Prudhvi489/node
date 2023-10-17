const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('./schemas/userschema');
const imageSchema = require('./schemas/imageschema')
mongoose.connect("mongodb://localhost:27017/latestdb", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

const users= mongoose.model("users",userSchema);
const Imguploads= mongoose.model("uploads",imageSchema)
module.exports={
    users,
    Imguploads
}