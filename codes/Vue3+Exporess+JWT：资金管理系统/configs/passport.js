const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
// 使用 mongoose
const mongoose = require('mongoose')
const User = mongoose.model('users')

const keys = require('./keys')

// 选项
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User
      .findById(jwt_payload.id)
      .then(user => {
        if(user)
          return done(null, user)
        return done(null, false)
      })
  }));
}