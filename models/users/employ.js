var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var employmentSchema = new Schema({
	//The employer or company name
	employerName: String,
	//This is the job title
	jobTitle: String,
	//This is the starting year
	start: {type:Number, default: 1950},
	//This is the ending year
	end: {type:Number, default: 1990},
	current: {type:Boolean, default:false},
	jobDescription:String
});

module.exports = mongoose.model('Employment', employmentSchema);