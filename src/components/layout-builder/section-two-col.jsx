/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import PropTypes from 'prop-types';
import ComponentWrapper from './component-wrapper';

export default function SectionTwoCol({ settings, components, baseStyles }) {
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
  const columns = {
    '50-50': 2,
    '30-70': '3fr 7fr',
    '70-30': '7fr 3fr',
    '40-60': '2fr 3fr',
    '60-40': '3fr 2fr',
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
  return (
    <div sx={baseStyles}>
      <Grid
        gap={
          settings.spacingColumns !== 'none'
            ? gapSizes[settings.spacingColumns]
            : null
        }
        className={
          settings.equalHeight
            ? 'section-two-col equal-height'
            : 'section-two-col'
        }
        columns={[null, null, columns[settings.columnProportions], null, null]}
      >
        <div key="0" sx={colStyles}>
          {componentsFirstCol}
        </div>
        <div key="1" sx={colStyles}>
          {componentsSecondCol}
        </div>
      </Grid>
    </div>
  );
}

SectionTwoCol.propTypes = {
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
