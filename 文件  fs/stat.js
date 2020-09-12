const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myfiles/");
async function test() {
  const stat = await fs.promises.stat(filename);
  console.log(stat); // 如果读取一个目录，那个目录中的size为0， 因为目录里有指针指向里面的数据，并没有存实质数据
  console.log("是否是目录", stat.isDirectory());
  console.log("是否是文件", stat.isFile());
}

test();