const md5 = require('md5');
const Admin = require("../models/Admin");
exports.addAdmin = async function (adminObj) {
  adminObj.loginPwd = md5(adminObj.loginPwd);
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

exports.deleteAdmin = async function (adminId) {
  // 方式1
  //   // 1.得到实例
  //   const ins = await Admin.findByPk(adminId);
  //   //   console.log(ins);
  //   // 2.删除实例
  //   if (ins) {
  //     await ins.destroy();
  //   }
  // 方式2
  const result = await Admin.destroy({
    where: {
      id: adminId,
    },
  });
  return result;
};

exports.updateAdmin = async function (id, adminObj) {
  if (adminObj.loginPwd) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
  }
  const result = await Admin.update(adminObj, {
    where: {
      id,
    },
  });
  return result;
};

/* 普通查询 */
exports.login = async function (loginId, loginPwd) {
  loginPwd = md5(loginPwd)
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd,
    },
  });
  if (result && result.loginId === loginId) {
    return result.toJSON();
  }
  return null;
};
/* 按照主键查询 */
exports.getAdminById = async function (id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};
