var mongoose = require('mongoose'),
Schema = mongoose.Schema,
Post = './../../models/generic/post.js';

exports.createPost = function (user, attachType, pTitle, pBody, attach) {
	new Post({
		poster: user,
		attType: attachType,
		postTitle: pTitle,
		postBody: pBody
		
	}).save();
}