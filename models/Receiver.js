const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const receiverSchema = new Schema({
	email: String, 
	response: { type: Boolean, default: false }

}); 

module.exports = receiverSchema; 