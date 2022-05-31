import PropTypes from 'prop-types';

/**
 * Formats a image url given a {@link @workshop/types#IImage} and {@link @workshop/utils/image-formatter#IImageResizeOptions}
 * @param image - image to format
 * @param options - options to format with
 *
 * @example
 * ```ts
 * const image = { src: 'contenidos/fotos/CIUDADES/8543072.jpg' };
 * const options = { width: 400, height: 250 };
 * resizeImage(image, options); // https://cdn.logitravel.com/wsimgresize/resize/crop/400/250/cdn.logitravel.com/contenidos/fotos/CIUDADES/8543072.jpg?quality=97
 * ```
 */
const resizeImage = (image, options) => {
  const { src } = image;
  const { width, height, quality = 97, cdn = 'cdn.logitravel.com' } = options;

  return `https://${cdn}/wsimgresize/resize/crop/${width}/${height}/${cdn}/${src}?quality=${quality}`;
};

export default resizeImage;
