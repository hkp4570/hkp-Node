require("./models/relation");

const adminServ = require("./services/adminService");
adminServ.addAdmin({
    loginId:'hkp',
    loginPwd: 123456
});
// adminServ.login("bcd", "123").then((r) => {
//     console.log(r);
// });
