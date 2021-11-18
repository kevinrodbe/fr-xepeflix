import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = (props) => {
  const { settings } = props;

  return <Slider {...settings}>{props.children}</Slider>;
};
