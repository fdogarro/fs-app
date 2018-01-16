const	passport = require('passport'); 
const	GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); 
const keys = require('../config/api-keys'); 

const User = mongoose.model('users'); 

passport.serializeUser((user, done) => {
	done(null, user.id); 
}); 

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user); 
	});
}); 

passport.use(
	new GoogleStrategy(
	{
		clientID: keys.googleClientID, 
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 
	async (accessToken, refreshToken, profile, done) => {
		const currentUser = await User.findOne({ googleID: profile.id });
			
		if(currentUser){
			done(null, currentUser); 
		}
				
		const user = await new User({ googleID: profile.id }).save()
			done(null, user); 
	
		}
	)
); 