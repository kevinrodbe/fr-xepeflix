import * as React from 'react';
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Carousel } from '../../components/Carousel';
import { MovieCard } from '../../components/MovieCard';
import { usePopularMovie, useTopRatedMovie, useUpcomingMovie } from '../../../adapter/hooks';
import { Hero } from '../../components/Hero';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Browse = () => {
  const statePopular = usePopularMovie();
  const stateTopRated = useTopRatedMovie();
  const stateUpcoming = useUpcomingMovie();

  return (
    <>
      <Hero />
      <Container>
        <Category loading={statePopular.isLoading} items={statePopular.populars} texts={{ title: 'Más populares' }} />
      </Container>
      <Container>
        <Category
          items={stateTopRated.topRated}
          loading={stateTopRated.isLoading}
          texts={{ title: 'Mejor evaluadas' }}
        />
      </Container>
      <Container>
        <Category
          items={stateUpcoming.upcoming}
          loading={stateUpcoming.isLoading}
          texts={{ title: 'Próximos eventos' }}
        />
      </Container>
    </>
  );
};

const Category = ({ loading, items, texts }) => {
  return (
    <Box component="div" sx={{ width: '100%', mt: 6 }}>
      <Grid container alignItems="center" spacing={1} sx={{ ml: 0 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
          {texts.title}
        </Typography>
        <ArrowForwardIcon fontSize="small" />
      </Grid>
      <Typography component="p" sx={{ color: 'text.secondary', mb: 4 }}>
        Nullam sapien arcu tempor
      </Typography>

      <Carousel settings={carouselSettings}>{renderCaroulelItems(loading, items)}</Carousel>
    </Box>
  );
};

const renderCaroulelItems = (loading, items) => {
  return loading
    ? Array.from(new Array(6)).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="rectangular" width={255} height={250} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={255} />
          <Skeleton variant="text" width={255} />
        </Box>
      ))
    : items.map((p) => <MovieCard key={p.id} item={p} />);
};
