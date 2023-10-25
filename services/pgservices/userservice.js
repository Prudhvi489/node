const {users} =  require('../../database/connections/connectionpg');
const {statusCode} = require('../../utils/statusCode');
const userservice={
    register:async(payload)=>{
        try{
            const user =  await users.create(payload);
            return statusCode(1,"User registered in pgsql")
        }
        catch(err){
            return statusCode(0,"Unable to register the user")
        }
    }
}
module.exports=userservice