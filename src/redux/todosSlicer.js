import { createSlice } from '@reduxjs/toolkit';

const initialTodos = {
  todos: [],
};
const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;

export const getTodos = state => state.todos;
