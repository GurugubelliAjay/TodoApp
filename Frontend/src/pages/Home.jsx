import React, { useEffect } from 'react';
import Todo from '../components/Todo';
import useTodoStore from '../stores/todoStore';

const Home = () => {
    const { todos, task, setTask, fetchTodos, createTodo, updateTodo, deleteTodo } = useTodoStore();

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const handleAddTodo = () => {
        if (!task) return;
        createTodo(task);
        setTask('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div
            className="min-h-screen py-10 px-5"
            style={{
                backgroundImage: `url("/dots.jpg")`,
                backgroundSize: '100px 100px',
                backgroundRepeat: 'repeat',
            }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-6 font-cursive">
                    Sticky Wall
                </h1>
                <div className="flex gap-2 mb-6 p-4 rounded-lg bg-white shadow-lg border border-gray-300">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                    className="flex-1 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black placeholder-gray-500 font-roboto"
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleAddTodo}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 shadow-md flex items-center justify-center font-roboto"
                >
                    <span className="mr-2">➕</span> Add
                </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {todos.map((todo) => (
                        <Todo
                            key={todo._id}
                            todo={todo}
                            onUpdate={updateTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
