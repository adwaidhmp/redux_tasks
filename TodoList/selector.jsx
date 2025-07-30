import { createSelector } from 'reselect';

const selectTodoState = (state) => state.todo;

export const selectAllTasks = createSelector(
  [selectTodoState],
  (todo) => todo.list
);

export const selectTaskCount = createSelector(
  [selectAllTasks],
  (list) => list.length
);
