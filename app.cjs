const express = require('express');
const app = express();
const router = require('./router/router.cjs');
const view = require('./router/view.cjs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: './config.env' });
app.use(express.json({}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(router);
app.use(view);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(8000, () => {
  console.log('app starts');
});
