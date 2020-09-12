// 既可以监听http 也可以监听socket
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");

// express
const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname, "public")));

//websocket
const io = socketIO(server);

io.on("connection", (socket) => {
  // 当新客户端连接到服务器之后，触发该事件
  console.log("新的客户端连接进来了");
  socket.on("msg", (chunk) => {
    // 监听到客户端的msg消息
    console.log(chunk.toString("utf-8"));
  });

  const timer = setInterval(() => {
    // 没两秒钟给客户端发送一个消息
    socket.emit("test", "test message from server");
  }, 2000);

  socket.on("disconnect", () => {
    clearInterval(timer);
    console.log("closed");
  });
});

server.listen(5008, () => {
  console.log("start listeing 5008");
});
