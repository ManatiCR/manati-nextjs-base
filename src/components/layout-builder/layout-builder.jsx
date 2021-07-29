/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import SectionOneCol from './section-one-col';
import SectionTwoCol from './section-two-col';
import SectionThreeCol from './section-three-col';

const verticalSizes = {
  small: ['px-24', null, 'px-32', null, null, null],
  medium: ['px-48', null, 'px-56', null, null, null],
  large: ['px-64', null, 'px-72', null, null, null],
};
export default function LayoutBuider({ sections }) {
  const renderedSections =
    sections &&
    sections.map((section, index) => {
      const settings = {
        background: section.background,
        columnProportions: section.columnProportions,
        equalHeight: section.equalHeight,
        spacingBottom: section.spacingBottom,
        spacingColumns: section.spacingColumns,
        spacingTop: section.spacingTop,
        variant: section.variant,
      };
      const baseStyles = {
        paddingTop:
          settings.spacingTop !== 'none' && verticalSizes[settings.spacingTop],
        paddingBottom:
          settings.spacingBottom !== 'none' &&
          verticalSizes[settings.spacingBottom],
        '> div': {
          maxWidth: settings.variant === 'fixed' ? '78.5rem' : null,
          px: settings.variant === 'fixed' ? 'px-16' : null,
          margin: settings.variant === 'fixed' ? '0 auto' : null,
        },
        backgroundColor: settings.background,
      };
      switch (section.sectionId) {
        case 'one_column': {
          return (
            <SectionOneCol
              key={index}
              components={section.components}
              baseStyles={baseStyles}
            />
          );
        }
        case 'two_column': {
          return (
            <SectionTwoCol
              key={index}
              settings={settings}
              components={section.components}
              baseStyles={baseStyles}
            />
          );
        }
        case 'three_column': {
          return (
            <SectionThreeCol
              key={index}
              settings={settings}
              components={section.components}
              baseStyles={baseStyles}
            />
          );
        }
        default: {
          return null;
        }
      }
    });

  return <>{renderedSections}</>;
}

LayoutBuider.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};
