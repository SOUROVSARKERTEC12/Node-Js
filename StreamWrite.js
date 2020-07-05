var fs = require("fs");
var data ='Money makes good';

//Create a writeable stream
var writeStream = fs.createWriteStream('input.txt');

//Set the encoding to be utf8
writeStream.write(data,'UTF8');

//Mark the end of file
writeStream.end();

//Handle stram events --> data, end, and error
writeStream.on('finish',function(){
    console.log("Write completed");
});

writeStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Ended");