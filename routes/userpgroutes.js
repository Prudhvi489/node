const usercontroller = require('../controllers/pgcontrollers/usercontroller');
module.exports=(router)=>{
    router.post('/pgregister',usercontroller.register)

}