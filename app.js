const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('Hello, world\n');
});

app.listen(8080, function(){
    console.log('example app listening on port 8080');
});