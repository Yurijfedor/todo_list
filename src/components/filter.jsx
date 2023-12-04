import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filter/filtersSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      type="text"
      label="Find todo by title"
      InputLabelProps={{
        focused: true,
      }}
      margin="normal"
      onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
    />
  );
};

export default Filter;
