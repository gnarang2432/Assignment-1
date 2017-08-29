var express = require("express");
var morgan = require("morgan");
var fs = require("fs");

var app = express();
app.set("view engine","pug");

var accessLogStream = fs.createWriteStream(__dirname+'/access.log',{flags:'a'})

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use("/static",express.static(__dirname+"/public"));
app.use(morgan('combined', {stream: accessLogStream}))



app.post('/submit',urlencodedParser,function(req,res){
    if(!req.body) return res.sendStatus(400);
    var one_day = 1000*60*60*24;
    var date1 = new Date(req.body.dob);
    var date2 = Date.now();
    var difference_ms = Math.abs(Date.now()-date1.getTime());
    var x = Math.round(difference_ms/one_day);
    res.render("index",{message:'Hey '+req.body.userName+' you have lived on this planet for '+x+' days'});
    //res.send('Hey '+req.body.userName+'you have lived on this planet for '+x+' days');
});

app.listen(3000);