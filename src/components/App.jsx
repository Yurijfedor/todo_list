import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from './todosList';
import { TodoForm } from './todoForm';
import { fetchTodos } from 'redux/todo/operations';
import { selectIsLoading, selectTodos } from 'redux/selectors';
import Filter from 'components/filter';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const todos = useSelector(selectTodos);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos());
      console.log("I'm worked!");
    }
  }, [dispatch, todos]);

  return (
    <>
      <Container maxWidth="sm" sx={{ position: 'relative' }}>
        <Box component="h1" sx={{ color: '#42a5f5', textAlign: 'center' }}>
          Your todos
        </Box>
        <TodoForm />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>

        <TodoList />
      </Container>
    </>
  );
};
