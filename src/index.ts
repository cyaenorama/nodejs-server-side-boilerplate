import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (_, res) => {
  res.send(
    '<h2>NodeJS Server Side Starter Boilerplate</h2><p>Basic NodeJS Server Side Boilerplate With Typescript Support.</p>'
  );
});

app.listen(PORT, () => {
  console.log(`server is listening at port: ${PORT}`);
});
