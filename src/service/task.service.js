const {getAllTaskDB, createTaskDB} = require('../repository/task.repository');

async function getAllTask(){
    const data = await getAllTaskDB()
    return data;
};

async function createTask(task, user_id){
const data = await createTaskDB(task, user_id);
return data;
};

module.exports = {getAllTask, createTask};