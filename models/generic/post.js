/*
* A post is rather generic. It will have it's type of attachments: Photos, Links, Video, Events(eventually).
* This will also be attached to the user in the form of an ObjectId array
*/

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var postSchema = Schema({
	poster: {type: Schema.ObjectId, ref: 'User'},
	attType: {type: String, default: 'none'},
	postTitle: {type:String, default: ''},
	postBody: String,
	albumId:[{type: Schema.ObjectId, ref: 'Album'}],
	videoId:[{type: Schema.ObjectId, ref: 'Video'}],
	linkId: [{type: Schema.ObjectId, ref: 'Link'}],
	// This will be a lot like circles in Google plus. I don't think that every post should be automatically sent to the public
	//If you choose a few indiviuals, you will prompted to find them, and they will be added to an automatic group.
	shareGroup: [{type: Schema.ObjectId, ref: 'Group'}]
});

module.exports = mongoose.model('Post', postSchema);