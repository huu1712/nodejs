const express = require('express');
const morgan = require('morgan');
const handlebars= require('express-handlebars');
const app = express();
const port = 3001;
const path = require('path');

app.use(morgan('combine'))

app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/blog', (req, res) => {
  res.render('blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})