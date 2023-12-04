import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from 'redux/todo/operations';
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from '@mui/material';

export const TodoForm = ({ currentTodo, setModalClose }) => {
  const [completed, setCompleted] = useState(
    currentTodo ? currentTodo.completed : ''
  );
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : '');

  const dispatch = useDispatch();
  const handleChange = evt => {
    const name = evt.target.name;
    switch (name) {
      case 'completed':
        setCompleted(evt.target.value);
        break;

      case 'title':
        setTitle(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const todoCompleted = evt.target.completed.value === 'true' ? true : false;
    const todoTitle = evt.target.title.value;
    const todo = {
      completed: todoCompleted,
      title: todoTitle,
      id: uuidv4(),
    };
    dispatch(addTodo(todo));
    reset();
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
    const todoCompleted = evt.target.completed.value === 'true' ? true : false;
    const todoTitle = evt.target.title.value;
    const todo = {
      id: currentTodo.id,
      completed: todoCompleted,
      title: todoTitle,
      userId: currentTodo.userId,
    };
    dispatch(editTodo(todo));
    setModalClose(false);
    console.log(currentTodo);
  };

  const reset = () => {
    setCompleted('');
    setTitle('');
  };

  return (
    <Box
      id="contactForm"
      component="form"
      sx={{
        '& .MuiTextField-root': {
          my: 2,
          mx: 'auto',
          width: '25ch',
          display: 'block',
        },
        textAlign: 'center',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: 'primary.main',
        borderStyle: 'solid',
        p: 2,
      }}
      onSubmit={currentTodo ? onHandleSubmit : handleSubmit}
    >
      <Box
        sx={{ typography: 'body1', color: 'primary.main', fontWeight: '600' }}
      >
        Add new Todo
      </Box>

      <TextField
        required
        fullWidth
        label="title"
        InputLabelProps={{
          focused: true,
        }}
        name="title"
        value={title}
        variant="filled"
        onChange={handleChange}
      />
      <FormControl>
        <FormLabel
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'primary.main',
          }}
          id="completed"
        >
          Status
        </FormLabel>
        <RadioGroup
          aria-labelledby="completed"
          name="completed"
          value={completed}
          onChange={handleChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Completed"
            sx={{ color: 'primary.main' }}
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="In progress"
            sx={{ color: 'primary.main' }}
          />
        </RadioGroup>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 25, display: 'flex', alignItems: 'center', mx: 'auto' }}
      >
        {currentTodo ? 'Edit todo' : 'Add todo'}
      </Button>
    </Box>
  );
};
