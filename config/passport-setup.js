const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const keys = require('./keys')
const User = require("../models/User")

passport.use(new GoogleStrategy({
        //options for the google strategy
        callbackURL:'/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret:  keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function

        //check if user already exist in db
        User.findOne({googleId: profile.id})

        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then(newUser => {
            console.log('New user', newUser)
        })
    })
) 