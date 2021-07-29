/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export default function HtmlContentVideo({ source }) {
  const videoStyles = {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    '& > div': {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  };
  return (
    <ReactPlayer
      url={source}
      sx={videoStyles}
      controls
      width="100%"
      height="100%"
    />
  );
}

HtmlContentVideo.propTypes = {
  source: PropTypes.string.isRequired,
};
