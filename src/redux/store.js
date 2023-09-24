import { configureStore } from '@reduxjs/toolkit';
import todosSlicer from './todosSlicer';

const store = configureStore({
  reducer: {
    todos: todosSlicer,
  },
});

export default store;
