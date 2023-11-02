const uuid = require('uuid');

const todoDB = [
    {
        id: 1,
        title: 'Este es un titulo',
        is_completed: false
    },
    {
        id: 2,
        title: 'Este es otro titulo',
        is_completed: false
    }
];

const getAllTodos = () => {
    return todoDB;
}

const getTodoById = (id) => {
    const data = todoDB.find(t => t.id == id) 
       return data
}

const createTodo = title => {
    const newTodo = {
        id: uuid.v4() ,
        title,
        is_completed : false
    };
    todoDB.push(newTodo);
    return newTodo;
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo
}