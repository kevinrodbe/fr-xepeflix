import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Input, Typography } from '@mui/material';

import { useLogin } from '../../../adapter/hooks/useLogin';

export const Login = () => {
  const { register, formState, submit, userState } = useLogin();
  const { errors, isValid } = formState;

  return (
    <Box
      component="div"
      sx={{ p: 2, width: '100%', height: '100vh', background: '#000', display: 'flex', alignItems: 'center' }}
    >
      <Container component="div" maxWidth="sm" sx={{ p: 2, width: '100%', color: '#fff' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Inicia sesión
        </Typography>
        <Typography variant="subtitle1" component="p">
          Qué bueno tenerte de vuelta!
        </Typography>
        <Box component="span" sx={{ color: 'red' }}>
          {userState?.error && <p>Credenciales incorrectas</p>}
        </Box>
        <form onSubmit={submit()}>
          <Input
            {...register('email', { required: true })}
            placeholder="Correo electrónico*"
            sx={{ bgcolor: '#2c2c2c', color: '#fff', width: '100%', p: 2, mt: 6 }}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <Input
            {...register('pwd', { required: true })}
            placeholder="Contraseña"
            sx={{ bgcolor: '#2c2c2c', color: '#fff', width: '100%', p: 2, mt: 3 }}
            type="password"
          />
          {errors.pwd?.message && <p>{errors.pwd?.message}</p>}
          <Button
            disabled={!isValid || userState?.loading}
            size="large"
            sx={{ width: '100%', mt: 3, p: 2 }}
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
          <Typography variant="subtitle1" component="p" sx={{ mt: 6, color: '#fff' }}>
            Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
          </Typography>
        </form>
      </Container>
    </Box>
  );
};
