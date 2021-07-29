import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HTMLContentScript({ scriptCode }) {
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
    const script = document.createElement('script');
    const scriptAttributes = scriptCode.attribs;
    // Add sctipt's tag attributes.
    if (scriptAttributes.charset) {
      script.charset = scriptAttributes.charset;
    }
    if (scriptAttributes.type) {
      script.type = scriptAttributes.type;
    }
    if (scriptAttributes.src) {
      script.src = scriptAttributes.src;
      script.async = true;
      script.defer = true;
    }
    // Support javascript code inside the script tag.
    if (scriptCode.children.length > 0) {
      script.text = scriptCode.children[0].data;
    }

    document.body.appendChild(script);

    return function removeScript() {
      document.body.removeChild(script);
    };
  }, [scriptCode]);

  return null;
}

HTMLContentScript.propTypes = {
  scriptCode: PropTypes.object.isRequired,
};
