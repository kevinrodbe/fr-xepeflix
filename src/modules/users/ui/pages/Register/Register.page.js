import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Input, Typography } from '@mui/material';

import { useRegister } from '../../../adapter/hooks/useRegister';

export const Register = () => {
  const { register, formState, submit, userState } = useRegister();
  const { errors, isValid } = formState;

  return (
    <Box
      component="div"
      sx={{ p: 2, width: '100%', height: '100vh', background: '#000', display: 'flex', alignItems: 'center' }}
    >
      <Container component="div" maxWidth="sm" sx={{ p: 2, width: '100%', color: '#fff' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Regístrate
        </Typography>
        <Typography variant="subtitle1" component="p">
          Disfruta de una experiencia personalizada!
        </Typography>

        <form onSubmit={submit()}>
          <Input
            {...register('username', { required: true })}
            placeholder="Nombre de usuario*"
            sx={{ bgcolor: '#2c2c2c', color: '#fff', width: '100%', p: 2, mt: 6 }}
          />
          {errors.username?.message && <p>{errors.username?.message}</p>}
          <Input
            {...register('email', { required: true })}
            placeholder="Correo electrónico*"
            sx={{ bgcolor: '#2c2c2c', color: '#fff', width: '100%', p: 2, mt: 3 }}
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
            Registrarme
          </Button>
          <Typography variant="subtitle1" component="p" sx={{ mt: 6 }}>
            Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </Typography>
        </form>
      </Container>
    </Box>
  );
};
