/**
 * Created by zhuoyue on 16-8-17.
 */
/**
 * Created by zhuoyue on 16-8-17.
 */
let express=require('express');
let path = require('path');
var app=express();

app.get('/',function (req,res) {
    console.log("aaa");
    res.sendfile(path.resolve('./superagent-demo.html'));
});

app.get('/a/:name',function (req,res){
     console.log(req.params.name);
    res.send('ZhuoYue');
});

app.listen(3000,function () {
    console.log("listen 3000");
});