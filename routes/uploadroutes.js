const {uploads} = require('../controllers/uploads')
const multer =require('multer')
// Set up Multer for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
module.exports=(router)=>{
    router.post('/upload',upload.single('image'),uploads.imageuploads);
    router.get('/getallimages',uploads.getallimages);
    router.get('/getimage/:imageId',uploads.geteachimage);
    router.delete('/deleteimage',uploads.deleteimage);
}