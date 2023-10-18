const {Imguploads} = require('../database/connections/connection');
const { statusCode } = require('../utils/statusCode');
const imageservice={
    addimages:async(payload)=>{
        try{
            const { originalname, buffer } = payload;
            const newImage = new Imguploads({
                name: originalname,
                data: buffer,
                contentType: payload.mimetype,
              });
             const res = await newImage.save();
            return statusCode(1,"Imageupdated successfully")
        }
        catch(err){
            return statusCode(0,"Failed to upload the image")
        }
    },
    getallimages:async()=>{
        try{
            const allimages = await Imguploads.find();
            return statusCode(1,"Images retrieved successfully",{images:allimages})
        }
        catch(err){
            return statusCode(0,"images not found")
        }
    },
    geteachimage:async(payload)=>{
        try{
            const image = await Imguploads.findById(payload);
            if(!image){
                return statusCode(0,"Image not found")
            }
            return image;
        }
        catch(err){
            
        }
    },
    deleteimage:async(payload)=>{
        try{
            const deletedImage = await Imguploads.findByIdAndDelete(payload);

            if (!deletedImage) {
              return statusCode(0,"Image not exists")
            }
            return statusCode(1,"Image deleted successfully");
        }
        catch(err){
            return statusCode(0,"Error in db")
        }
    }
}
module.exports={imageservice}