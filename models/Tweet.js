var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Tweet Schema
var TweetSchema = new Schema({
	user: {
		type: String,
		required: true,
		maxlength: 50
	},
	text: {
		type: String,
		required: true,
		maxlength: 140
	},
	pic: {
		type: String,
		required: true,
	},
	liked: {
		type: Boolean,
	}
},
{
	collection: 'tweets'
});


module.exports = mongoose.model('Tweet', TweetSchema);