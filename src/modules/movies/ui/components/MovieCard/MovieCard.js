import { CardContent, Card, CardMedia, Typography } from '@mui/material';

import { IMG_BASE_URL } from '../../../../../constants';

export const MovieCard = (props) => {
  const { title, releaseDate, posterPath } = props.item || {};

  return (
    <>
      <Card sx={{ maxWidth: 300, boxShadow: 'none', pr: 2 }}>
        <CardMedia
          component="img"
          sx={{ height: '380px', objectFit: 'cover' }}
          image={`${IMG_BASE_URL}${posterPath}`}
        />
        <CardContent sx={{ px: 0 }}>
          <Typography
            component="h5"
            sx={{
              fontWeight: 'bold',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>
          <Typography component="p" sx={{ color: 'text.secondary' }}>
            {releaseDate}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
