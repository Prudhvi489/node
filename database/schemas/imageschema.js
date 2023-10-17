const {mongoose} = require('mongoose')
// Define MongoDB schema
const imageSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    contentType: String,
  });
module.exports=imageSchema;
  