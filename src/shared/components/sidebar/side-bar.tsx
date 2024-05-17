import React from 'react';
import {
  Box,
  ListItemButton,
  Typography,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  TableBar,
  ExitToApp,
  AccountCircle,
  EditNote,
} from '@mui/icons-material';
import useTranslation from '../../hooks/use-translation';
import './side-bar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import paths from '../../constants/paths';

const Sidebar = () => {
  const t = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const clickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <Box className="side-bar-container">
      <Box className="app-title-box">
        <Typography className="app-title">{t('APP_TITLE')}</Typography>
      </Box>

      <Box className="items-list-box">
        <Box data-testid="allot-table-list-item" className="list-item">
          <ListItemButton
            selected={location.pathname === paths.allotTable}
            onClick={() => clickHandler(paths.allotTable)}
          >
            <ListItemIcon>
              <TableBar />
            </ListItemIcon>
            <ListItemText primary={t('ALLOT_TABLE')} />
          </ListItemButton>
        </Box>

        <Box data-testid="take-order-list-item" className="list-item">
          <ListItemButton
            selected={location.pathname === paths.takeOrder}
            onClick={() => clickHandler(paths.takeOrder)}
          >
            <ListItemIcon>
              <EditNote />
            </ListItemIcon>
            <ListItemText primary={t('TAKE_ORDER')} />
          </ListItemButton>
        </Box>
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
