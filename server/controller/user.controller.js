mongoose=require('mongoose');
var User=require('../data_tables/users.js');

module.exports.submitEmail=function(req,resp){
  var user=new User(req.body);
user.save();
resp.json(resp.body);
console.log(resp);
}
