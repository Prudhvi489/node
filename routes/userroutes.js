const {usercontroller} = require('../controllers/usercontroller')
module.exports=(router)=>{
    router.post('/register',usercontroller.register);
    router.post('/verifyotp',usercontroller.verifyotp)
    router.post('/verifypwd',usercontroller.login);
    router.post('/sendotp',usercontroller.sendotp);
    router.post('/setpwd',usercontroller.setpwd);
}