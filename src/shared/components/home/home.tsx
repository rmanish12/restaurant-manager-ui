import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../sidebar/side-bar';
import './home.scss';

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-side-bar">
        <Sidebar />
      </Box>

      <Box className="home-routes-container">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
