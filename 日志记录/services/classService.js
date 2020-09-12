const Class = require('../models/Class');
exports.addClass = async function(obj) {
    const ins = await Class.create(obj);
    return ins.toJSON();
}
exports.deleteBook = async function (id) {
    return await Class.destroy({
        where:{
            id,
        }
    })
}
exports.updateBook = async function (id, obj) {
    return await Class.update(obj, {
        where:{
            id,
        }
    })
}
