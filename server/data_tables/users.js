mongoose=require("mongoose");
module.exports=mongoose.model('User',{
email:String,
name:String
});
