const path = require('path');

const basename = path.basename('/abc/bcd/def/index','.js'); // 提取出用’/‘隔开的path的最后一部分
// console.log(basename);

const seq = path.sep; // 获取当前系统的分隔符
// console.log(seq);

const delimiter = path.delimiter; // 系统环境变量中的分隔符 ;
// console.log(delimiter);

const PATH = process.env.PATH; // 获取所有环境变量
// console.log(PATH.split(path.delimiter));

const dir = path.dirname('a/b/c/index.html'); // 文件所在目录
// console.log(dir);

const ext = path.extname('a/b/c/index.html'); // 文件后缀名
// console.log(ext);

const baseUrl = 'a/b';
const fullPath = path.join(baseUrl,'index.html'); // 路径拼接
// console.log(fullPath);

const relPath = path.relative('a/b/indes.html', 'a/b/index.js');  // 路径换为相对路径的格式
// console.log(relPath);

const absPath = path.resolve(__dirname, "./a.js"); // 当前文件的绝对路径（相对于当前文件所在目录）
// 如果不加第一个参数，相对于process.cwd()
console.log(absPath);