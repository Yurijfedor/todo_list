import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectVisibleTodos,
  selectFilterValue,
  selectTodos,
} from 'redux/selectors';
import { List } from '@mui/material';
import { Todo } from './todo';

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);
  const filterValue = useSelector(selectFilterValue);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  // const todos = useSelector(selectTodos);
  // console.log(todos);
  useEffect(() => {
    setCurrentPage(1);
  }, [filterValue]);

  const pageCount = Math.ceil(visibleTodos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedTodos = visibleTodos.slice(startIndex, endIndex);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      <List>
        {paginatedTodos.map(todo => (
          <Todo key={todo.id} todoInfo={todo} />
        ))}
      </List>

      <div>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
