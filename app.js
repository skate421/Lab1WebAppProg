import express from 'express';
import cors from 'cors';
import contactsRouter from './routes/contacts.js';

const port = process.env.PORT || 3000;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use('/api/contacts', contactsRouter);

/*app.get('/', (req, res) => {
  res.send('Hello Express!');
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
