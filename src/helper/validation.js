function isValidId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id is not a num');
    if (id < 0) throw new Error('id is negative');
    next()
};

function isValidTaskBody(req, res, next) {
    const { task, user_id } = req.body;
    if (!task) throw new Error('you are not gave a task');
    if (!isNaN(task)) throw new Error('task is a num');
    if (isNaN(user_id)) throw new Error('user_id is not a num');
    if (user_id < 0) throw new Error('user_id is negative');

    next()
};

function isValidUserBody(req, res, next) {
    const { name, surname, email, pwd } = req.body;
    if (!name) throw new Error('you are not gave a name');
    if (!surname) throw new Error('you are not gave a surname');
    if (!email) throw new Error('you are not gave a email');
    if (!pwd) throw new Error('you are not gave a pwd');

    if (!isNaN(name)) throw new Error('name is a num');
    if (!isNaN(surname)) throw new Error('surname is a num');
    if (pwd.length < 8) throw new Error('pwd is too short');
    if(!/^[a-z0-9\_\-\.]+@[a-z]+\.[a-z]+$/gm.test(email)) throw new Error('email is inValid');
    next()
}


module.exports = { isValidId, isValidTaskBody, isValidUserBody};