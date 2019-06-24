const router = require('express').Router()
const passport = require('passport')

//auth login
router.get('/login', (req,res)=>{
    res.render('login')
})

//auth logout
router.get('/logout', (req,res)=>{
    //handle with passport
    res.send('logging out')
})

//auth with google
router.get('/google', passport.authenticate('google',{
    //what info you need to get from google
    scope: ['profile']
}))

//callback from google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
    res.send('You reached the callback URI')
})

module.exports = router; 