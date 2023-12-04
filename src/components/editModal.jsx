import React, { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { TodoForm } from './todoForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditTodo = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        sx={{
          height: 25,
          width: 25,
          backgroundColor: '#0288d1',
          mr: 1,
          color: 'white',
          '&:hover': {
            color: '#0288d1',
          },
          '& svg': {
            fontSize: 15,
          },
        }}
        onClick={handleOpen}
      >
        <EditRoundedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TodoForm currentTodo={todo} setModalClose={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};
