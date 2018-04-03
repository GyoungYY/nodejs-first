buf = Buffer.alloc(256);
len = buf.write('www.jinjumao.club');

console.log("写入字节数:"+len);

console.log(buf.toString('utf8',0,12));