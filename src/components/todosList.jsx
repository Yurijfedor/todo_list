import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleTodos, selectFilterValue } from 'redux/selectors';
import { List, ButtonGroup, Button } from '@mui/material';
import { Todo } from './todo';

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);
  const filterValue = useSelector(selectFilterValue);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
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

      <ButtonGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          justifyContent: 'center',
        }}
      >
        {Array.from({ length: pageCount }, (_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            sx={{
              borderRadius: '20px',
              borderWidth: '2px',
            }}
          >
            {index + 1}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};
