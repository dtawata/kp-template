import express from 'express';
import accountsRouter from './routes/accounts.js';
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/accounts', accountsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});