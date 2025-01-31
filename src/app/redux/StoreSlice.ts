import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../../type";

interface todoState {
  todoList: Todo[];
}

const initialState: todoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((item) => item?._id !== action.payload);
    },
    removeTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, deleteTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
