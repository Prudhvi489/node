const localimageservice = require('../services/localimageservice')
const path = require('path')
const localuploads={
    addimage:async(req,res)=>{
        try{
            const uploadres= await localimageservice.addimageservice(req.body,req.files)
            return res.json(uploadres);
        }
        catch(err){
            return res.json({status:0,message:'Internal server error'});
        }
    },
    getlocalimages:async(req,res)=>{
        try{
            const get_img_res=  await localimageservice.all_local_images();
            console.log(get_img_res)
            return res.json(get_img_res)
        }
        catch(err){
            return res.json({status:0,message:"internal server error"})
        }
    },
    getsingleimage:async(req,res)=>{
        try{
            const eachimg= await localimageservice.geteachimage(req.params.id);
            // res.sendFile(path.join(__dirname,'..',eachimg))
            console.log(eachimg)
            return res.json(eachimg)
        }
        catch(err){
            return res.json({status:0,message:"internal server error"})
        }
    },
    deleteimage:async(req,res)=>{
        try{
            const delres= await localimageservice.deleteimage(req.params.id);
            return res.json(delres)
        }
        catch(err){
            return res.json({status:0,message:'internal server error'})
        }
    }
}
module.exports=localuploads;