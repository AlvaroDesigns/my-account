import PropTypes from 'prop-types';

const MyImage = ({ width, height, quality, src, alt, className }) => {
  const finalSrc = `${src}?w=${width}?h=${height}&q=${quality || 75}`;

  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={finalSrc} alt={alt} loading="lazy" />;
};

MyImage.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default MyImage;
