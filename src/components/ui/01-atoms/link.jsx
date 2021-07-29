/** @jsxImportSource theme-ui */
import { Link as ThemeUILink } from 'theme-ui';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

export default function Link({
  href,
  variant,
  children,
  className,
  onFocus,
  onBlur,
}) {
  // Test for internal links (links starting with '/').
  // Adapted from https://www.gatsbyjs.com/docs/gatsby-link/#reminder-use-link-only-for-internal-links.
  const internal = /^\/(?!\/)/.test(href);

  const linkVariant = variant && `buttons.${variant}`;

  return internal ? (
    <NextLink href={href} passHref>
      <ThemeUILink
        variant={linkVariant}
        className={className}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </ThemeUILink>
    </NextLink>
  ) : (
    <ThemeUILink
      href={href}
      variant={linkVariant}
      className={className}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </ThemeUILink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Link.defaultProps = {
  variant: null,
  className: null,
  onFocus: null,
  onBlur: null,
};
