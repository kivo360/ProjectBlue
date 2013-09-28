var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var workSchema = new Schema({
	//Reference to userSchema
	occupation: String,
	skills: [String],
	showEmployment : Boolean,
	employment: [{type: Schema.Types.ObjectId, ref: 'Employment'}]
});

module.exports = mongoose.model('Work', workSchema);