// process 进程
// console.log(global);
// console.log(__dirname); // 当前模块所在的目录
// console.log(__filename); // 文件目录
// console.log(process.cwd());
// setTimeout(() => {
//     console.log('abc');
// },1000)
// process.exit(); // 强制退出进程
// console.log(process.argv); // 获取到命令行参数
// console.log(process.platform); // 获取当前操作系统
// process.kill(id);
// console.log(process.env.ANDROID_HOME); // process.evn获取环境变量

// const buffer = Buffer.from('abc','utf-8');
// console.log(buffer);

const path = require('path');
const basename = path.basename('fdsf/fsdf/fdsf/fd/a.asf','.html');
// console.log(basename);

console.log(path.sep);

console.log(process.env.PATH.split(path.delimiter));
