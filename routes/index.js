const router = require('express').Router();
const userroutes= require('./userroutes')
const uploadroutes = require('./uploadroutes');
const localuploadroutes =  require('./uploadlocalroutes');
userroutes(router);
uploadroutes(router);
localuploadroutes(router)
module.exports=router;