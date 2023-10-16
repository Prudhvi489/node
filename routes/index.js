const router = require('express').Router();
const userroutes= require('./userroutes')
userroutes(router);
module.exports=router;