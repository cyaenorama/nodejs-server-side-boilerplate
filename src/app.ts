import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send(
    '<h2>NodeJS Server Side Starter Boilerplate</h2><p>Basic NodeJS Server Side Boilerplate With Typescript Support.</p>'
  );
});

export default app;
