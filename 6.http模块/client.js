const http = require("http");

const request = http.request(
  "http://yuanjin.tech:5005/api/movie", {
    method: "GET",
    // method: 'POST'
  },
  resp => {
    console.log("服务器响应的状态码", resp.statusCode);
    console.log("服务器响应头", resp.headers);
    let result = "";
    resp.on("data", chunk => {
      result += chunk.toString("utf-8");
    });

    resp.on("end", chunk => {
      console.log(JSON.parse(result));
    });
  }
);

// request.write('') // POST请求在此写入内容

request.end(); //表示消息体结束