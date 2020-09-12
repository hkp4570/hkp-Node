const os = require('os');

console.log(os.EOL); // 不同操作系统下的分隔符

console.log(os.arch()) // 获取CPU的架构名

console.log(os.cpus().length); // 返回一个数组对象,包括CPU的型号,速度,时间等

console.log(os.freemem() / 2 ** 30); // 当前还剩下多少内存可用

console.log(os.homedir()); // 获取用户目录

console.log(os.hostname()); // 获取主机名

console.log(os.tmpdir()); // 临时存放数据的目录