import PropTypes from 'prop-types';

export default function PageLayoutWrapper({ children }) {
  // TODO: Add page header and footer here.
  return (
    <main>{children}</main>
  );
}

PageLayoutWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
