import React from 'react';
import {
  Box,
  ListItemButton,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TableBar, ExitToApp, AccountCircle } from '@mui/icons-material';
import useTranslation from '../../hooks/use-translation';
import './side-bar.scss';

const Sidebar = () => {
  const t = useTranslation();

  return (
    <Box className="side-bar-container">
      <Box className="app-title-box">
        <Typography className="app-title">{t('APP_TITLE')}</Typography>
      </Box>

      <Box className="items-list-box">
        <ListItemButton selected>
          <ListItemIcon>
            <TableBar />
          </ListItemIcon>
          <ListItemText primary="Allot table" />
        </ListItemButton>
      </Box>

      <Box className="account-box">
        <ListItemButton>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
