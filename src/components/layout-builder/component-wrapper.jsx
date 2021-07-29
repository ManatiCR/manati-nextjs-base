/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import HtmlContent from '../wysiwyg/html-content';
import BasicBlock from '../ui/02-molecules/basic-block';

// Takes CTA paragraph data and returs consistent object.
function mapCTA(cta) {
  return cta
    ? {
        id: cta.id,
        title:
          // eslint-disable-next-line no-underscore-dangle
          cta.__typename === 'ParagraphFile'
            ? cta.file.description
            : cta.linkTitle,
        url:
          // eslint-disable-next-line no-underscore-dangle
          cta.__typename === 'ParagraphFile' ? cta.file.fileURL : cta.linkURL,
      }
    : null;
}

// Maps an array of CTAs to a new array of consistent objects.
function mapCTAMultiple(ctas) {
  return ctas ? ctas.map((cta) => mapCTA(cta)) : null;
}

// Returns processed wysiwyg content.
function mapBody(body) {
  return body ? <HtmlContent content={body} /> : null;
}

export default function ComponentWrapper({ data }) {
  if (!data) return null;

  // eslint-disable-next-line no-underscore-dangle
  switch (data.__typename) {
    case 'BlockBasic': {
      return (
        <BasicBlock
          title={data.title}
          body={mapBody(data.body)}
          headingLevel={data.headingLevel}
        />
      );
    }
    // TODO: Add other components here.
    default: {
      return null;
    }
  }
}

ComponentWrapper.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
