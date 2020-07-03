var buf = new Buffer('Easy To See');
var json = buf.toJSON(buf);

console.log(json);