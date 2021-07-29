// Function to provide responsive font presets, that can be used
// in this theme file or directly in components.
// TODO: Update to match design.
export function fontPreset(preset) {
  const sizes = {
    s: 'px-12',
    m: 'px-14',
    l: ['px-16', 'px-18', null, null, null, null],
    xl: ['px-18', 'px-24', null, null, null, null],
    xxl: ['px-24', 'px-36', null, null, null, null],
  };

  return sizes[preset];
}

export default {
  useBorderBox: true,
  colors: {
    black: '#000',
    white: '#fff',
    // TODO: Uncomment and add theme base colors.
    // text: '',
    // background: '',
    // primary: '',
    // secondary: '',
    // accent: '',
    // highlight: '',
    // muted: '',
    // TODO: Add extra theme colors.
  },
  space: {
    'px-2': '0.125rem',
    'px-4': '0.25rem',
    'px-8': '0.5rem',
    'px-12': '0.75rem',
    'px-16': '1rem',
    'px-24': '1.5rem',
    'px-32': '2rem',
    'px-40': '2.5rem',
    'px-48': '3rem',
    'px-56': '3.5rem',
    'px-64': '4rem',
    'px-72': '4.5rem',
    'px-80': '5rem',
  },
  sizes: {
    container: '78.5rem',
  },
  radii: {
    'px-4': '0.25rem',
    'px-8': '0.5rem',
    'px-10': '0.625rem',
    'px-20': '1.25rem',
    'px-100': '6.25rem',
  },
  fonts: {
    // TODO: Update fonts to match design.
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fontSizes: {
    // TODO: Update font sizes to match design.
    'px-12': '0.75rem',
    'px-14': '0.875rem',
    'px-16': '1rem',
    'px-18': '1.125rem',
    'px-24': '1.5rem',
    'px-36': '2.25rem',
  },
  lineHeights: {
    body: '1.33',
    heading: '1.375',
  },
  // Breakpoints: 480px - 720px - 768px - 920px - 1256px
  breakpoints: ['30em', '45em', '48em', '57.5em', '78.5em'],
  // TODO: Update text styles to match designs.
  text: {
    heading: {
      color: 'text',
      marginTop: 0,
      marginBottom: 'px-4',
      lineHeight: 'heading',
    },
    body: {
      fontSize: fontPreset('m'),
      'p:last-child': {
        marginBottom: 0,
      },
    },
  },
  // Styles for buttons (links, button elements and form elements).
  buttons: {
    base: {
      // Add base button styles here.
    },
    // Add button variants.
    primary: {
      variant: 'buttons.base',
      // Primary button specific styles.
    },
    noStyles: {
      // Basic style-less button.
      border: 'none',
      padding: 0,
      backgroundColor: 'transparent',
      color: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'left',
      cursor: 'pointer',
    },
  },
  // Layout styles.
  layout: {
    // Container styles.
    container: {
      px: 'px-16',
    },
    // List reset styles (remove bullets and margin/padding).
    listReset: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    // Visually hidden content (for a11y purposes).
    visuallyHidden: {
      position: 'absolute !important',
      clip: 'rect(1px, 1px, 1px, 1px)',
      overflow: 'hidden',
      height: '1px',
      width: '1px',
      wordWrap: 'normal',
    },
    // Hide text to replace it with image (but keep it available to screen readers).
    textHidden: {
      textIndent: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
  // General base styles. Used in wysiwyg content and as base styles for other elements.
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: fontPreset('xxl'),
    },
    h2: {
      variant: 'text.heading',
      fontSize: fontPreset('xl'),
    },
    h3: {
      variant: 'text.heading',
      fontSize: fontPreset('l'),
    },
    h4: {
      variant: 'text.heading',
      fontSize: fontPreset('m'),
    },
    h5: {
      variant: 'text.heading',
      fontSize: fontPreset('m'),
    },
    h6: {
      variant: 'text.heading',
      fontSize: fontPreset('m'),
    },
    p: {
      fontSize: 'inherit',
      marginTop: 0,
      marginBottom: 'px-16',
    },
    li: {
      fontSize: 'inherit',
      marginBottom: 'px-8',
    },
    ul: {
      listStyleType: 'none',
      marginTop: 0,
      marginBottom: 'px-16',
      padding: 0,
      // Custom bullets.
      // TODO: Adjust to match design.
      '& > li': {
        position: 'relative',
        paddingLeft: '1.2em',
        '&::before': {
          content: '""',
          width: '0.375em',
          height: '0.375em',
          borderRadius: '50%',
          backgroundColor: 'black',
          position: 'absolute',
          left: 0,
          top: '0.5em',
        },
      },
    },
    ol: {
      marginTop: 0,
      marginBottom: 'px-16',
      paddingLeft: '1.2em',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    a: {
      // Add basic link styles here.
    },
    blockquote: {
      fontSize: fontPreset('xl'),
      fontWeight: 'bold',
      my: 'px-24',
      mx: ['px-24', 'px-40'],
    },
  },
  forms: {
    label: {
      // TODO: Add label styles here.
    },
    input: {
      // TODO: Add input styles here.
    },
    textarea: {
      // TODO: Add textarea styles here.
    },
    select: {
      // TODO: Add select styles here.
    },
    submit: {
      // TODO: Add form submit button styles here.
    },
    // Add custom variants and extra element styles here.
  },
};
