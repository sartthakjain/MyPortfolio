var express= require("express");
var path=require("path");

var app=express();

app.use('/app',express.static(__dirname+'/app'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.use('/images',express.static(__dirname+'/images'));
app.use("/node_modules",express.static(__dirname+'/node_modules'));
//app.use("/socicon-1.3",express.static(__dirname+'/socicon-1.3'));

app.get('/',function(req,resp){
  resp.sendFile('index.html',{root:path.join(__dirname,'/')});
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
