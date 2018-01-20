const mongoose = require('mongoose'); 
const Alert = mongoose.model('alerts'); 

module.exports = (app) => {
	app.post('/api/alerts', (req, res, next){
		if(!req.user){
			return res.status(401).send({ error: 'Please login'})
		}

		const { name, description, receiver, category } = req.body; 

		const alert = new Alert({
			name, 
			description, 
			receiver, 
			category,
			_user: req.user.id,
			createdDate: Date.now()

		}); 
	}); 

}; 