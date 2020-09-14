const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

// 创建一个模型对象
const Admin = sequelize.define('Admin', {
  // 在这里定义模型属性
  loginId: {
    type: DataTypes.STRING(100), // 可指定长度
    allowNull: false
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull 默认为 true
  }
}, {
  createdAt: false, // false为不展示  createdAt：'xxx'取别名
  updatedAt: false,
  paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
});

// (async function () { // 同步数据库   单个同步
//   await Admin.sync({
//     alter: true,
//   })
//   console.log('模型ADMIN同步完成');
// })()
module.exports = Admin;