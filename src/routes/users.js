const express = require('express');
const router = express.Router();
//Este pool hace referencia a la conexión de la base de datos
// const pool = require('../database')

const passport = require('passport');

// app.get('/*', (req,res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
//   })

router.get('/signup', (req, res) => {
    console.log("HI");
});

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', (req, res) => {
    res.send('this is your login')
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
    // res.send('welcome');
    console.log('Welcome')
})

router.get('/profile', (req, res) => {
    res.send('this is your profile');
});
module.exports = router;