// 读取该目录中目录和文件
const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myfiles/");
async function test() {
  const pathes = await fs.promises.readdir(dirname);
  console.log(pathes);
}

test();