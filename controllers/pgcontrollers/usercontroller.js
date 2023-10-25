const userservice = require('../../services/pgservices/userservice');
const {statusCode} = require('../../utils/statusCode');
const usercontroller={
    register:async(req,res)=>{
        try{
            const register_res =  await userservice.register(req.body);
            return res;
        }
        catch(err){
            return res.json(0,"Internal server error")
        }
    }
}
module.exports=usercontroller