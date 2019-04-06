const { webFrame } = require('electron');

process.once('loaded', () => {
  webFrame.registerURLSchemeAsPrivileged('app', {
    secure: true,
    bypassCSP: false,
    allowServiceWorkers: true,
    supportFetchAPI: true,
    corsEnabled: false,
  });
});
