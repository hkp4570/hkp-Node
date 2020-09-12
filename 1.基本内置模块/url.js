const URL = require('url');

const url = URL.parse("https://nodejs.org:80/a/b/c?t=3&u=5#abc");
// console.log(url);

const urlObj = new URL.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'); // url转换为对象
// console.log(urlObj);

const obj = {
  href: "https://nodejs.org:80/a/b/c?t=3&u=5#abc",
  origin: "https://nodejs.org:80",
  protocol: "https:",
  username: "",
  password: "",
  host: "nodejs.org:80",
  hostname: "nodejs.org",
  port: "80",
  pathname: "/a/b/c",
  search: "?t=3&u=5",
  hash: "#abc"
};

const baseUrl = URL.format(obj);
console.log(baseUrl);