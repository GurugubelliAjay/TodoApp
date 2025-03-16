import React from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
    const colors = ['bg-yellow-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200', 'bg-purple-200'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={`${randomColor} p-4 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-200`}>
            <div className="flex flex-col h-full">
                <span className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-600' : 'text-black'}`}>
                    {todo.task}
                </span>
                <div className="mt-2 flex gap-2 justify-end">
                    <button
                        onClick={() => onUpdate(todo._id, { ...todo, completed: !todo.completed })}
                        className="p-1 text-green-600 hover:text-green-700 transition duration-200"
                    >
                        {todo.completed ? '↩️' : '✔️'}
                    </button>
                    <button
                        onClick={() => onDelete(todo._id)}
                        className="p-1 text-red-600 hover:text-red-700 transition duration-200"
                    >
                        ❌
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
