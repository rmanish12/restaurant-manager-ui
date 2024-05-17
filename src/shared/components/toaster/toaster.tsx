import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import { IToasterProps } from '../../models/toaster';
import './toaster.scss';

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

const Toaster = ({ message, type }: IToasterProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      className="toast-snackbar"
    >
      <Alert
        onClose={handleClose}
        severity={type || 'success'}
        variant="filled"
        className="toast-alert"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
