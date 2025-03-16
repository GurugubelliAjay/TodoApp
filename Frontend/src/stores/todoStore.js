import { create } from 'zustand';
import axiosInstance from '../lib/axios';

const useTodoStore = create((set) => ({
  todos: [],
  task: '',
  setTask: (task) => set({ task }),
  fetchTodos: async () => {
    try {
      const response = await axiosInstance.get('/todos');
      set({ todos: response.data });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  },
  createTodo: async (task) => {
    try {
      const response = await axiosInstance.post('/todos', { task });
      set((state) => ({ todos: [...state.todos, response.data], task: '' }));
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  },
  updateTodo: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/todos/${id}`, data);
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === id ? response.data : todo
        ),
      }));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  },
  deleteTodo: async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  },
}));

export default useTodoStore;