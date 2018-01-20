const mongoose = require('mongoose'); 
const { Schema } = mongoose; 
const ReceiverSchema = require('./Receiver'); 

const alertSchema = new Schema({
	name: String, 
	description: String, 
	receiver: ReceiverSchema, 
	category: String, 
	yes: { type: Number, default: 0 }, 
	no: { type: Number, default: 0 }, 
	_user: { type: Schema.Types.ObjectId, ref:'User'}
	createdDate: Date, 
	responseDate: Date

}); 

mongoose.model('alerts', alertSchema); 