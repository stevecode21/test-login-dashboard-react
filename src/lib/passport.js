const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');


//Login
passport.use('signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},async(req, username, password, done)=>{
    // console.log(req.body)
    // console.log(username)
    // console.log(password)
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if(rows.length > 0){
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword){
            done(null, user, req.flash('success','Welcome' + user.username));
            console.log('Welcome ' + user.username);
        }else{
            done(null, false, req.flash('message','Incorrect password'));
            console.log('Incorrect password');
        }
    } else{
        console.log('The username does not exists');
        return done(null, false, req.flash('message','The username does not exists'));
    }
}));

//Registro de usuario
passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { fullname } = req.body;
    const { email } = req.body;
    let newUser = {
        username,
        password,
        fullname,
        email
    };
    newUser.password = await helpers.encryptPassword(password);
    //Guardando en la base de datos
    const result = await pool.query('INSERT INTO users SET ? ', [newUser]);
    newUser.id = result.insertId;
    // console.log(result);
    return done(null, newUser);
}))

//Serializarlo de la sesión
passport.serializeUser((user, done)=>{
    done(null, user.id);
});

//Deserializarlo de la sesión
//NOTA: Todas las consultas a la base de datos son asíncronas
passport.deserializeUser(async(id, done)=>{
    var rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);

});



