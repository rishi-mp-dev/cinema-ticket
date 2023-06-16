import express from 'express';
import bodyParser from 'body-parser';
import env from './environment/environment';

const app = express();
const PORT = env.getPort();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
  });