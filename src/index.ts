import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.listen(PORT && PORT, () => {
  console.log(`server is listening at port: ${PORT}`);
});
