const router = require('express').Router();
const userroutes= require('./userroutes')
const uploadroutes = require('./uploadroutes');
const localuploadroutes =  require('./uploadlocalroutes');
// pgsql routes
const userpgroutes = require('../routes/userpgroutes')
userroutes(router);
uploadroutes(router);
localuploadroutes(router)
userpgroutes(router)
module.exports=router;