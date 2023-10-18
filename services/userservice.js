const {users}=require('../database/connections/connection')
const {statusCode} = require('../utils/statusCode')
const bcrypt= require('bcrypt')
const userservice={
    // registering the new user
    register:async(payload)=>{
        try {
            const {name,age,email} = payload;
            const registerdata={
                ...payload,
                otpstatus:false,
                otp:"",
            }
             // Check if a user with the given email exists
             const existingUser = await users.findOne({ email: email });
             if(existingUser===null){
                  const result = await users.create(registerdata);
                  return await userservice.sendotp({email:email});
             }
             else{
                  if(existingUser?.password!==undefined){ 
                  return statusCode(1,"User already existed",{
                    ...payload,
                    passwordstatus:1
                  })
                }
                else{
                    return await userservice.sendotp({email:email})
                }
             }
          } 
        catch (err) {
            console.log(err)
            return statusCode(0, "Failed to Register");
        }
          
    },
    // send otp
    sendotp:async(payload)=>{
        try{
            const {email,others} = payload;
            const emailexists=await users.findOne({email:email})
            if(emailexists!==null){
                const updateotp=  await users.updateOne({email:email},{$set:{otp:'1234'}});
                return statusCode(1,"Otp sent successfully")
            }
            else{
                return statusCode(0,"User doesn't exists")
            }
        }
        catch(err){

        }
    },
    // verifyotp
    verifyotp:async(payload)=>{
        try{
            const {email,otp}=payload;
            const existingUser = await users.findOne({email:email});
            if(existingUser?.otp===otp){
                return statusCode(1,"user logged in succesfully")
            }
            else{
                return statusCode(0,"Incorrect otp.")
            }
        }
        catch(err){
            console.log(err);
            return statusCode(0,"Internal server error")
        }
    },
    // set password
    setpwd:async(payload)=>{
        try{
            const {email,password}=payload;
            const existingUser = await users.findOne({email:email});
            if(existingUser!==null){
                const hashedpwd = await bcrypt.hash(password,10);
                console.log(hashedpwd,"cjanges")
                await users.updateOne({email:email},{$set:{password:hashedpwd}});
                return statusCode(1,"Password created succesfully")
            }
            else{
                return statusCode(0,"Password not set.")
            }
        }
        catch(err){

        }
    },
    // verify password
    login:async(payload)=>{
        try{
            const {email,password}=payload;
            const user = await users.findOne({email:email});
            if(user!==null){
                // Compare the entered password with the hashed password
                const passwordMatch = await bcrypt.compare(password, user.password);
                if(passwordMatch){
                    return statusCode(1,"User Loggedin successfully")
                }
                else{
                    return statusCode(0,"Incorrect password")
                }
            }
            else{
                return statusCode(0,"User doesn't exist user need to register")
            }
        }
        catch(err){
            console.log(err)
            return statusCode(0,"Internal server error")
        }
    }

}
module.exports={userservice}