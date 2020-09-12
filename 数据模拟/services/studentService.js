const Student = require('../models/Student');
exports.addStudent = async function(obj) {
    const ins = await Student.create(obj);
    return ins.toJSON();
}
exports.deleteStudent = async function (id) {
    return await Student.destroy({
        where:{
            id,
        }
    })
}
exports.updateStudent = async function (id, obj) {
    return await Student.update(obj, {
        where:{
            id,
        }
    })
}
