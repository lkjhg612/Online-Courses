const express = require('express');

const path = require('path');

const handlebars = require('express-handlebars');

const app = express();

const methodOverride = require('method-override')

const route = require('./routes');

const port = 2000;

//add image
const multer = require('multer')



const db = require('../src/config');

const cookie = require("cookie-parser")


app.use(cookie())

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))

app.engine('hbs', handlebars.engine({ extname: 'hbs',helpers:{
   sum: (a, b) => a+b

} }));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));




//connect to db
db.connect();
route(app);

app.listen(port, function () {
    return console.log(`http://localhost:${port}`);
});
