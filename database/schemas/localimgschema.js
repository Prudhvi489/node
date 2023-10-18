const {mongoose}= require('mongoose');
const subSchema = new mongoose.Schema({
  path:String,
});
const localimgschema =  new mongoose.Schema({
    paths: [subSchema],
    // other fields if needed
  });
  module.exports=localimgschema;