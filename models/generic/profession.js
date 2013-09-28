/**
* We will have a database of professions. Each profession will have a title, description and estimated aptitude rating.
**/

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;



var professionSchema = Schema({
	title: {type: String, unique: true},
	description: String,
	//Numerical Average of each person in profession
	aptitude: {type: Schema.ObjectId, ref: 'Post'}
});

module.exports = mongoose.model('Profession', professionSchema);