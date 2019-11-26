import dotenv from 'dotenv';
import fs from 'fs-extra';
import http from 'http';
import https from 'https';

import app from './app';

dotenv.config();

const { HOSTNAME, PORT } = process.env;

const configs = {
  // You may need sudo to run on port 443
  // production: { ssl: true, port: 443, hostname: HOSTNAME },
  production: { ssl: false, port: PORT, hostname: HOSTNAME },
  development: { ssl: false, port: PORT, hostname: HOSTNAME }
};

const environment = process.env.NODE_ENV || 'production';
const { ssl, port, hostname } = configs[environment];

((): void => {
  try {
    let server: http.Server;

    if (ssl) {
      server = https.createServer(
        {
          key: fs.readFileSync(`.ssl/server.key`),
          cert: fs.readFileSync(`.ssl/server.crt`)
        },
        app
      );
    } else {
      server = http.createServer(app);
    }

    server.listen({ port }, () => {
      console.log(
        `server running at: http${ssl ? 's' : ''}://${hostname}:${port}/`
      );
    });
  } catch (err) {
    console.error(`new Error: ${err}`);
  }
})();
