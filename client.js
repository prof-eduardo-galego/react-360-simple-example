import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Hello360', { /* initial props */ }),
    r360.getDefaultSurface()
  );
}

window.React360 = {init};
