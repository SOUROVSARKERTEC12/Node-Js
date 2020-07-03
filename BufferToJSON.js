var buf = new Buffer('I Love You');
var json = buf.toJSON(buf);

console.log(json);