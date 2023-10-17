const router = require('express').Router();
const userroutes= require('./userroutes')
const uploadroutes = require('./uploadroutes')
userroutes(router);
uploadroutes(router);
module.exports=router;