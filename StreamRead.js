var fs = require("fs");
var data ='';

//Create a readable stream
var readStream = fs.createReadStream('input.txt');

//Set the encoding to be utf8
readStream.setEncoding('UTF8');

//Handle stram events --> data, end, and error
readStream.on('data',function(chunk){
    data+=chunk;
});

readStream.on('end',function(){
    console.log(data);
});

readStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Ended");