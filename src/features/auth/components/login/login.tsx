import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import LoginForm from '../login-form/login-form';
import './login.scss';
import useTranslation from '../../../../shared/hooks/use-translation';

const Login = () => {
  const t = useTranslation();

  return (
    <Box className="login-container">
      <Box className="welcome-msg-box">
        <Typography className="welcome-msg">{t('WELCOME_MSG')}</Typography>
      </Box>
      <Card className="login-card">
        <LoginForm />
      </Card>
    </Box>
  );
};

export default Login;
