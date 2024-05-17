import React from 'react';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import './loader.scss';

const Loader = () => {
  return (
    <Backdrop className="loader" open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
