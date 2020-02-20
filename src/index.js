const express = require('express');
const bodyParser = require('body-parser')
//Morgan me permitirá mostrar en consola las peticiones que van llegando a mi server
const morgan = require('morgan');
// const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { database } = require('./config/keys');
const flash = require('connect-flash');
//Path para poder ubicar la carpeta public
const path = require('path');

//Initializations
//Mi aplicación de express
const app = express();
//Inicializo esto para uqe la aplicacion sepa que estoy creando una autenticación
require('./lib/passport');

//Settings
//Configuraciones que necesita mi servidor de express
app.set('port', process.env.PORT || 4000);

//Middlewares -> Funciones que se ejecutarán cada vez que una cliente envia una petición al servidor
app.use(morgan('dev'));//Uso morgan
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.use(session({
    secret: 'stevemysqlcode',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
//Inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
/*Esta función toma la información del usuario y lo que el server quiere responder y toma una función para continuar con el resto del código*/
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
})

//Routes
app.use('/api/', require('./routes'));
app.use('/api/users', require('./routes/users'))


//public
app.use(express.static(path.join(__dirname, 'public')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});


