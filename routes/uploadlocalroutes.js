const localimgcontroller= require('../controllers/localuploads')
const multer= require('multer');
const path =require('path')
// Setup Multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/'); // specify the directory where you want to store files
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
module.exports=(router)=>{
    router.post("/localupload", upload.array('image',3),localimgcontroller.addimage);
    router.get("/localimages", localimgcontroller.getlocalimages);
    router.get("/localimages/:id",localimgcontroller.getsingleimage);
    router.delete('/localimages/:id',localimgcontroller.deleteimage);
}