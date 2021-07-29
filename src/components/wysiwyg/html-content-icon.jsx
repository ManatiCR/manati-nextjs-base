/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function HtmlContentIcon({ imageProperties, viewMode }) {
  if (!imageProperties) return null;

  const dimensions = {
    small: 45,
    medium: 90,
    large: 125,
    wide: 125,
  };
  const imageSize = Object.keys(dimensions).includes(viewMode)
    ? {
        width: dimensions[viewMode],
        height:
          (dimensions[viewMode] / imageProperties.width) *
          imageProperties.height,
      }
    : {
        width: imageProperties.width,
        height: imageProperties.height,
      };

  return (
    <Image
      src={process.env.NEXT_PUBLIC_API_URL + imageProperties.src}
      alt={imageProperties.alt}
      width={imageSize.width}
      height={imageSize.height}
    />
  );
}

HtmlContentIcon.defaultProps = {
  imageProperties: undefined,
};

HtmlContentIcon.propTypes = {
  imageProperties: PropTypes.object,
  viewMode: PropTypes.string.isRequired,
};
