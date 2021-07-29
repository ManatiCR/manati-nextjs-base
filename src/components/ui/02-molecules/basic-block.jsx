/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui';
import PropTypes from 'prop-types';

export default function BasicBlock({ title, body, headingLevel }) {
  const renderedTitle = title && (
    <Heading as={headingLevel} variant="styles.h1">
      {title}
    </Heading>
  );
  return (
    <div>
      {renderedTitle}
      <div sx={{ variant: 'text.body' }}>{body}</div>
    </div>
  );
}

BasicBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.element,
  headingLevel: PropTypes.string.isRequired,
};

BasicBlock.defaultProps = {
  title: undefined,
  body: undefined,
};
