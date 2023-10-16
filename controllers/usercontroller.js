const {userservice} =require('../services/userservice')
const usercontroller={
    /**
     * 
     * @param {Object} req- request contains name,age,email
     * @param {Object} res- response contains if insert give status as 1 or 0 
     */
    register:async(req,res)=>{
        try{
            const {body}=req;
            const register= await userservice.register(body);
            res.json(register);
        }
        catch(err){
            console.log(err)
        }
        
    },
    sendotp:async(req,res)=>{
        try{
            const {email}=req.body;
            const sendotpres= await userservice.sendotp(req.body)
            return res.json(sendotpres)
        }
        catch(err){
            return res.json({status:0,message:'Internal server error'})
        }
    },
    /**
     * @param {object}-req request contains email,password
     */
    verifyotp:async(req,res)=>{
        try{
            const {email,otp}=req.body;
            const pwdres= await userservice.verifyotp(req.body);
            return res.json(pwdres)
        }
        catch(err){
            return res.json({status:0,message:"Internal server error"})
        }
    },
    setpwd:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const pwdres =  await userservice.setpwd(req.body);
            return res.json(pwdres)
        }
        catch(err){
            return res.json({status:0,message:'Internal server error'})
        }
    },
    /**
     * 
     * @param {Object} req- request object contains email,password 
     * @param {Object} res- return the success or failure of login 
     */
    login:async(req,res)=>{
        try{
            const {body}=req;
            const loginres = await userservice.login(body);
            return res.json(loginres);
        }
        catch(err){
            console.log(err)
        }
    }
}
module.exports={
    usercontroller
}
