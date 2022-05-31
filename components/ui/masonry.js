/* Import */
import PropTypes from 'prop-types';

import Masonry from 'react-masonry-css';
import Image from 'next/image';
import React from 'react';

/* Masonry */
const MasonryGallery = ({ props }) => {
  const lazyRoot = React.useRef(null);
  // Convert array to JSX items
  const renderItem = props.map((item, i) => {
    return (
      <div key={i + 1}>
        <Image
          lazyRoot={lazyRoot}
          src={item.src}
          className="object-cover shadow-lg h-[66vh] w-full"
          alt="Picture of the author"
          width={500}
          height={450}
        />
      </div>
    );
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {renderItem}
        </Masonry>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          fill="#f5f5f4"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-stone-100"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

MasonryGallery.propTypes = {
  mansonry: PropTypes.array,
};

export default MasonryGallery;
