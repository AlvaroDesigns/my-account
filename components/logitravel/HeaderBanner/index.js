/* Import */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeaderBanner = ({ props }) => {
  const { items } = props;

  const lazyRoot = React.useRef(null);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <a
            href={item.link.href}
            target={item.link.target}
            title={item.link.title}
          >
            <Image
              lazyRoot={lazyRoot}
              src={item.src}
              alt={item.link.title}
              width={2520}
              height={575}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

/* Value Props */
HeaderBanner.propTypes = {
  items: PropTypes.array,
};

/* Export */
export default HeaderBanner;
