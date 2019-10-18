import dotenv from 'dotenv';
import http from 'http';

import app from './app';

dotenv.config();

const PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, () => {
  console.log(`server is listening at port: ${PORT}`);
});
