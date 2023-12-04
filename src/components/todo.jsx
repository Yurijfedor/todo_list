import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todo/operations';
import { ListItem, ListItemText, Button } from '@mui/material';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { EditTodo } from './editModal';

export const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ py: 0 }}>
      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: 'medium',
          letterSpacing: 0,
          color: '#2d5cc2',
        }}
        primary={
          <>
            {todoInfo.completed ? (
              <FaCheck style={{ marginRight: '5px', color: 'green' }} /> // Іконка для completed === true
            ) : (
              <FaTimes style={{ marginRight: '5px', color: 'red' }} /> // Іконка для completed === false
            )}
            {`${todoInfo.id}: ${todoInfo.title}`}
          </>
        }
      />
      <EditTodo todo={todoInfo} />
      <Button
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center' }}
        onClick={() => dispatch(deleteTodo(todoInfo.id))}
      >
        Delete
      </Button>
    </ListItem>
  );
};
