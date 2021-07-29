/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import PropTypes from 'prop-types';
import ComponentWrapper from './component-wrapper';

export default function SectionThreeCol({ settings, components, baseStyles }) {
  const gapSizes = {
    small: 'px-12',
    medium: 'px-24',
    large: 'px-32',
  };
  const colStyles = {
    minWidth: 0,
    '& > div:first-child:last-child, & > article:first-child:last-child, & > section:first-child:last-child': settings.equalHeight
      ? {
          height: '100%',
        }
      : null,
    '> div + div': {
      marginTop: 'px-24',
    },
  };
  const componentsFirstCol = components
    .filter((component) => component.region === 'first')
    .map((component) => (
      <ComponentWrapper data={component.block} key={component.uuid} />
    ));
  const componentsSecondCol = components
    .filter((component) => component.region === 'second')
    .map((component) => (
      <ComponentWrapper data={component.block} key={component.uuid} />
    ));
  const componentsThirdCol = components
    .filter((component) => component.region === 'third')
    .map((component) => (
      <ComponentWrapper data={component.block} key={component.uuid} />
    ));
  return (
    <div sx={baseStyles}>
      <Grid
        gap={
          settings.spacingColumns !== 'none'
            ? gapSizes[settings.spacingColumns]
            : null
        }
        columns={[null, null, 3, null]}
      >
        <div key="0" sx={colStyles}>
          {componentsFirstCol}
        </div>
        <div key="1" sx={colStyles}>
          {componentsSecondCol}
        </div>
        <div key="3" sx={colStyles}>
          {componentsThirdCol}
        </div>
      </Grid>
    </div>
  );
}

SectionThreeCol.propTypes = {
  settings: PropTypes.shape({
    columnProportions: PropTypes.string,
    equalHeight: PropTypes.number,
    spacingBottom: PropTypes.string,
    spacingTop: PropTypes.string,
    spacingColumns: PropTypes.string,
    variant: PropTypes.string,
    background: PropTypes.string,
  }).isRequired,
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  baseStyles: PropTypes.object.isRequired,
};
