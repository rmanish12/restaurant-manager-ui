import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import useTranslation from '../../../../shared/hooks/use-translation';
import './login-form.scss';
import useLoginHook from '../../hooks/use-login-hook';

const LoginForm = () => {
  const t = useTranslation();

  const { formValues, handleChange, disabled, handleSubmit, hasError } =
    useLoginHook();

  return (
    <Box className="login-form">
      <Typography variant="h6">{t('LOGIN')}</Typography>

      <Box className="username">
        <TextField
          fullWidth
          id="username"
          label={t('USERNAME')}
          name="username"
          value={formValues.username}
          onChange={handleChange}
          error={hasError}
        />
      </Box>

      <Box className="password">
        <TextField
          fullWidth
          id="password"
          label={t('PASSWORD')}
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          error={hasError}
        />
      </Box>

      {hasError && (
        <Box className="login-error">
          <Typography className="error-msg">{t('LOGIN_ERROR')}</Typography>
        </Box>
      )}

      <Box className="login-btn">
        <Button
          color="primary"
          variant="contained"
          fullWidth
          disabled={disabled}
          onClick={handleSubmit}
          size="large"
        >
          {t('LOGIN')}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
