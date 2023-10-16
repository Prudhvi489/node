const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  otpstatus:Boolean,
  otp:String
});
// Use a pre-save hook to hash the password before saving to the database
userSchema.pre('save', async function(next) {
  try {
    // Check if the password is modified (or new)
    if (!this.isModified('password')) {
      return next();
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, 10); // 10 is the salt rounds

    // Set the hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
// Function to update the password


module.exports=userSchema;