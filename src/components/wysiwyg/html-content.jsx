/** @jsxImportSource theme-ui */
import { BaseStyles } from 'theme-ui';
import PropTypes from 'prop-types';
import parse, { domToReact } from 'html-react-parser';
import HtmlContentImage from './html-content-image';
import HtmlContentVideo from './html-content-video';
import HtmlContentIcon from './html-content-icon';
import HtmlcontentScript from './html-content-script';
import Link from '../ui/01-atoms/link';

const baseStyles = {
  maxWidth: '100%',
};
const alignmentStyles = {
  none: {
    margin: (theme) => `0 0 ${theme.space['px-16']}`,
  },
  center: {
    margin: (theme) => `0 auto ${theme.space['px-16']}`,
  },
  left: {
    float: 'left',
    margin: [(theme) => `0 ${theme.space['px-16']} ${theme.space['px-16']} 0`],
  },
  right: {
    float: 'right',
    margin: (theme) => `0 0 ${theme.space['px-16']} ${theme.space['px-16']}`,
  },
};
const viewModeStyles = {
  image: {
    small: {
      width: ['100%', '300px'],
    },
    medium: {
      width: ['100%', null, '500px'],
    },
    large: {
      width: ['100%', null, null, null, '768px'],
    },
    wide: {
      width: '100%',
    },
  },
  icon: {
    small: {
      width: '45px',
    },
    medium: {
      width: '90px',
    },
    large: {
      width: '125px',
    },
    wide: {
      width: '125px',
    },
  },
};
const centerWidthOverride = {
  image: {
    small: {
      width: '100%',
      maxWidth: '300px',
    },
    medium: {
      width: '100%',
      maxWidth: '500px',
    },
    large: {
      width: '100%',
      maxWidth: '768px',
    },
    wide: {},
  },
  icon: {
    small: {
      width: '100%',
      maxWidth: '45px',
    },
    medium: {
      width: '100%',
      maxWidth: '90px',
    },
    large: {
      width: '100%',
      maxWidth: '125px',
    },
    wide: {
      width: '100%',
      maxWidth: '125px',
    },
  },
};
const textAlignmentStyles = {
  '& figcaption': {
    marginTop: 1,
  },
  '& .text-align-center': {
    textAlign: 'center',
  },
  '& .text-align-right': {
    textAlign: 'right',
  },
  '&::after': {
    content: '""',
    clear: 'both',
    display: 'table',
  },
};

const ctaStyles = {
  color: (theme) => `${theme.colors['blue-dark']} !important`,
  marginBottom: 'px-4',
  marginRight: 'px-8',
  '&:hover': {
    color: (theme) => `${theme.colors.white} !important`,
  },
};

export default function HtmlContent({ content }) {
  const parsedHtml = parse(content, {
    // eslint-disable-next-line consistent-return
    replace(node) {
      if (
        node.type === 'tag' &&
        (node.name === 'article' || node.name === 'figure')
      ) {
        const isFigure = node.name === 'figure';
        const media = isFigure
          ? node.children.find(
              (child) => child.type === 'tag' && child.name === 'article',
            )
          : node;
        const type = media.attribs['data-media-source'];
        const source = media.attribs['data-media-source-value'];
        const viewMode = media.attribs['data-media-view-mode'];
        const alignmentMatch = node.attribs.class.match(/align-(\w+)/);
        const alignment = alignmentMatch ? alignmentMatch[1] : 'none';
        let renderedMedia;
        let stylesMediaType = type;
        switch (type) {
          case 'image':
          case 'icon': {
            const image = media.children.find(
              (child) => child.type === 'tag' && child.name === 'img',
            );
            const imageProperties = image && {
              src: image.attribs.src,
              width: image.attribs.width,
              height: image.attribs.height,
              alt: image.attribs.alt,
            };
            renderedMedia =
              type === 'image' ? (
                <HtmlContentImage
                  imageProperties={imageProperties}
                  viewMode={viewMode}
                />
              ) : (
                <HtmlContentIcon
                  imageProperties={imageProperties}
                  viewMode={viewMode}
                />
              );
            break;
          }
          case 'remote_video': {
            stylesMediaType = 'image';
            renderedMedia = <HtmlContentVideo source={source} />;
            break;
          }
          default:
            renderedMedia = null;
        }
        if (node.name === 'figure') {
          const caption = node.children.find(
            (child) => child.type === 'tag' && child.name === 'figcaption',
          );
          return (
            <figure
              sx={{
                ...baseStyles,
                ...alignmentStyles[alignment],
                ...viewModeStyles[stylesMediaType][viewMode],
                ...(type === 'image' && alignment === 'center'
                  ? centerWidthOverride[stylesMediaType][viewMode]
                  : {}),
              }}
            >
              {renderedMedia}
              {domToReact([caption])}
            </figure>
          );
        }
        return (
          <div
            sx={{
              ...baseStyles,
              ...alignmentStyles[alignment],
              ...viewModeStyles[stylesMediaType][viewMode],
              ...(type === 'image' && alignment === 'center'
                ? centerWidthOverride[stylesMediaType][viewMode]
                : {}),
            }}
          >
            {renderedMedia}
          </div>
        );
      }
      if (node.type === 'tag' && node.name === 'a') {
        const { href, class: className } = node.attribs;
        const isCTA = className === 'button';
        return (
          <Link
            href={href}
            variant={isCTA ? 'primary' : null}
            sx={isCTA ? ctaStyles : null}
          >
            {domToReact(node.children)}
          </Link>
        );
      }
      if (node.name === 'script') {
        return <HtmlcontentScript scriptCode={node} />;
      }
    },
  });
  return <BaseStyles sx={{ ...textAlignmentStyles }}>{parsedHtml}</BaseStyles>;
}

HtmlContent.propTypes = {
  content: PropTypes.string.isRequired,
};
