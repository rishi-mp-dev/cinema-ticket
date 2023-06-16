const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000 || process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
  });