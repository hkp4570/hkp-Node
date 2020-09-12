require("./models/relation");
// require("./spider/fetchBooks");
const stuServ = require("./services/studentService");
stuServ.getStudents(1, 10, false, "秀").then((r) => { // 模糊查询
    console.log(r);
});
