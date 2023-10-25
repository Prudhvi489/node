const {localimg} = require('../database/connections/connection');
const { statusCode } = require('../utils/statusCode');
const localimageservice={
    addimageservice:async(payload,file)=>{
        try{
            // const filePath = file.path;
            // const newFile = new localimg({ path: filePath });
            // await newFile.save();
            const imageDocuments=file.map(file => ({ path: file.path }));
            await localimg.create({"paths":imageDocuments});
            return statusCode(1,"Local image uploaded succesfully")
        }
        catch(err){
            return statusCode(0,"Error in uploading the image")
        }
    },
    all_local_images:async()=>{
        try{
            const images = await localimg.find().exec();
            return statusCode(1,"Images retrieved succesfully",images)
        }
        catch(err){
            return statusCode(0,"Error in retrieving images")
        }
    },
    geteachimage:async(payload)=>{
        try{
            const eachimg= await localimg.findById(payload);
            // single image retrival
            // return eachimg.path;
            // Multiple images retrieval
            return statusCode(1,"images retrieved successfully",eachimg);

        }
        catch(err){

        }
    },
    deleteimage:async(payload)=>{
        try{
            const delimg = await localimg.findByIdAndDelete(payload);
            return statusCode(1,"Image deleted succesfully")
        }
        catch(err){
            return statusCode(0,"Image can't be able to delete")
        }
    }
}
module.exports=localimageservice;