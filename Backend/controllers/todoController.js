import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTodo = async (req, res) => {
    const { task } = req.body;
    try {
        const todo = new Todo({ task });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate(id, { task, completed }, { new: true });
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};