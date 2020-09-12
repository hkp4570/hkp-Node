// const sequelize = require('./models/db');

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })()

// require('./models/sync');

const adminServices = require('./services/adminService');
const studentServices = require('./services/studentService');

// adminServices.addAdmin({
//     loginId: 'hkp',
//     loginPwd: '123456'
// }).then(r => {
//     console.log(r) // 没什么用;
// })

studentServices.addStudent({
    name: 'hkp',
    birthdady: '2020-6-27',
    sex: 1,
    mobile: '13344445555',
})

