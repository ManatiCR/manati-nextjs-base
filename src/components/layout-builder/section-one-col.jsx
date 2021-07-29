/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import ComponentWrapper from './component-wrapper';

export default function SectionOneCol({ components, baseStyles }) {
  const contentAreaStyles = {
    '> div + div': {
      marginTop: 'px-24',
    },
  };
  const renderedComponents = components.map((component) => (
    <ComponentWrapper data={component.block} key={component.uuid} />
  ));
  return (
    <div sx={baseStyles}>
      <div sx={contentAreaStyles}>{renderedComponents}</div>
    </div>
  );
}

SectionOneCol.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  baseStyles: PropTypes.object.isRequired,
};
