import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter;
export const selectTodos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilterValue],
  (todos, filters) => {
    return todos.filter(todo =>
      todo.title?.toLowerCase().includes(filters.value?.toLowerCase())
    );
  }
);
