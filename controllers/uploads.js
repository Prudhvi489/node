const {imageservice} = require('../services/imageservice')
const uploads={
    imageuploads:async(req,res)=>{
        try{
            const imgres= await  imageservice.addimages(req.file)
            return res.json(imgres)
        }
        catch(err){
            return res.json({status:0,message:"Internal server error"})
        }
    },
    getallimages:async(req,res)=>{
        try{
            const allimages= await imageservice.getallimages();
            return res.json(allimages)
        }
        catch(err){
            return res.status(500).json({status:0,message:'Internal server error'})
        }
    },
    geteachimage:async(req,res)=>{
        try{
            const imageId = req.params.imageId;
            const image = await imageservice.geteachimage(imageId);
             // Set the appropriate content type
            res.set('Content-Type', image.contentType);

            // Send the image data as the response
            res.send(image.data);
        }
        catch(err){
            return res.json({status:0,message:'Internal server error'})
        }
    },
    deleteimage:async(req,res)=>{
        try{
            const {imageid}=req.body;
            const delimg= await imageservice.deleteimage(imageid);
            return res.json(delimg);
        }
        catch(err){
            res.status(500).json({status:0,message:"Internal server error"})
        }
    }
}
module.exports={uploads};