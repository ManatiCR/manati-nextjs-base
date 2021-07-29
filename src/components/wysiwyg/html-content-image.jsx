/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function HtmlContentImage({ imageProperties, viewMode }) {
  if (!imageProperties) return null;

  const dimensions = {
    small: 300,
    medium: 500,
    large: 768,
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

HtmlContentImage.defaultProps = {
  imageProperties: undefined,
};

HtmlContentImage.propTypes = {
  imageProperties: PropTypes.object,
  viewMode: PropTypes.string.isRequired,
};
