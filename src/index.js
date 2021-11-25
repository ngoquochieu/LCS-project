const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const route = require('./routers');
const app = express();
const db = require('./config/db/index');
const port = 3000;

//Connect db
db.connect();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Cookie-parser
app.use(cookieParser());
app.use(methodOverride('_method'));

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/clothing_store_dev',
    collection: 'mySessions'
  });
// Session
app.use(session({
    secret:'Quoc Hieu',
    resave:false,
    saveUninitialized:false,
    store: store,
}))
// app.use(bcrypt());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'util')));
app.set('views', path.join(__dirname, 'resources/views'));
//Set engine
app.engine(
    'hbs',
    handlebars({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'resources/views/layouts'),
        partialsDir: path.join(__dirname,'resources/views/partials'),
        // partialsDir: path.join(__dirname,'resources/views/management'),
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
