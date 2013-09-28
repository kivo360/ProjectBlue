var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var projectSchema = Schema({
	//This is a public name. It doesn't have to be entirely unique. The ID will make it unique
	projectName: String,
	//This is the description of the project
	projectDescription: String,
	//The youtube video link for the project
	video: String,
	diPhotos: [{type: Schema.ObjectId, ref: 'Album'}],
	members: [{user:{type: Schema.ObjectId, ref: 'User'}, role:{type: Schema.ObjectId, ref: 'Role'}}],
	post: [{type: Schema.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('Project', projectSchema);