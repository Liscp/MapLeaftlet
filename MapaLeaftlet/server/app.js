const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const apiRouter = express.Router();
const apiRouter2 = express.Router();

const path = require('path');
const datos = require('./data/db.json');

apiRouter.route('/json')
  .get((req, res) => {
    res.json(datos);
});

apiRouter.route('/estudiantes')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../vista/index.html'))
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
