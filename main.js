const { app, protocol, BrowserWindow } = require('electron');
const { readFile } = require('fs');
const { extname } = require('path');
const { URL } = require('url');

process.env.NODE_ENV = 'production';

const createProtocol = (scheme, normalize = true) => {
  protocol.registerBufferProtocol(scheme,
    (request, respond) => {
      let pathName = new URL(request.url).pathname;
      pathName = decodeURI(pathName); // Needed in case URL contains spaces

      readFile(`${__dirname}/${pathName}`, (error, data) => {
        const extension = extname(pathName).toLowerCase();
        let mimeType = '';

        if (extension === '.js') {
          mimeType = 'text/javascript';
        } else if (extension === '.html') {
          mimeType = 'text/html';
        } else if (extension === '.css') {
          mimeType = 'text/css';
        } else if (extension === '.svg' || extension === '.svgz') {
          mimeType = 'image/svg+xml';
        } else if (extension === '.json') {
          mimeType = 'application/json';
        }

        respond({ mimeType, data });
      });
    },
    (error) => {
      if (error) {
        console.error(`Failed to register ${scheme} protocol`, error);
      }
    });
};

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true });

app.on('ready', () => {
  createProtocol('app');

  const browserWindow = new BrowserWindow({ webPreferences: { preload: `${__dirname}/preload.js` } });
  browserWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
