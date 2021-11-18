import { Box, Container, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export const Hero = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'black',
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1579033496646-OG89785JYUPWBQA0VJ1C/image-asset.jpeg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        height: 500,
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: '#F7CF71',
            color: 'black',
            display: 'inline-flex',
            mb: 4,
            p: 2,
          }}
        >
          <LocalMoviesIcon fontSize="large" />
        </Box>
        <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
          Xepelin Movie Database
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ maxWidth: '550px' }}>
          Cat small lizards, bring them into house, then unable to find them on carpet roll over and sun my belly yet
          stand in doorway,
        </Typography>
      </Container>
    </Box>
  );
};
