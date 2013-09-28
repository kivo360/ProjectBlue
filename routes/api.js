
/*This is the api for the social platform. Any and all of the schemas
* will be routed though this file. 
* Many of the database specific items(like pushing database items) will be routed through the files in the database folder.
* That database folder is embeded in the routes folder
*/

var User = require('./../models/users/user.js'),
	Contact = require('./../models/users/contact.js'),
	Post = require('./../models/generic/post.js'),
	passport = require('passport'),
	//userD is used to mess with the database of users
	userD = require('./database/user.js'),
	LocalStrategy = require('passport-local').Strategy;


exports.index = function(req, res) {
	res.render('index', { user: req.user, title: 'Blue' });
}


/**
* New User Page
**/

exports.newUser = function (req, res) {
	res.render('database/user/create');
}

/**
* Save new user in database
**/

exports.saveUser = function (req, res) {
	console.log('Request Accepted');
	//Request Accepted
	var b = req.body;
	console.log(b);
	userD.addUser(b.email, b.password, b.first, b.middle, b.last);
	console.log('User added');
	console.log('redirecting');
	res.redirect('/');
}

exports.printUser = function (req, res) {
	res.send(req.user);
}

exports.account = function(req, res) {
	res.render('account', { user: req.user });
};

exports.getlogin = function(req, res) {
	res.render('login', { user: req.user, message: req.session.messages });
};

exports.admin = function(req, res) {
	res.send('access granted admin!');
};


	
// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.
exports.postlogin = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err) { return next(err); }
		if (!user) {
			req.session.messages =  [info.message];
			return res.redirect('/login');
		}
		req.logIn(user, function(err) {
			if (err) { return next(err); }
			return res.redirect('/');
		});
	})(req, res, next);
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};


/**
* Show list of all users
**/

exports.show = function (req, res) {
	User.find({}, function (err, docs) {
		res.render('database/user/index', {currentUsers: docs});
	});
}


exports.newScorePage = function (req, res) {
	res.render('briggs', {user:req.user});
	//res.send('This is the myer-briggs test page');
}

exports.showUser = function (req, res) {
	var user = req.user;
	res.send(user);
}



exports.contactEntry = function (req, res) {
	var use = req.user;
	console.log(req.user._id);
	console.log(use);
	
	res.render('database/contact/create', {user:req.user});
}

/**
* Push Contact
**/

exports.pushContact = function (req, res) {
	var b = req.body;
	userD.pushContactToUser(
		req.user,
		userD.addContact(b.cMethod, b.aCode, b.three, b.four)
		);
	console.log(req.user);
}

exports.postScore = function (req, res) {
	var b = req.body;
	var d = new Date();
	userD.addPersonal(req.user, userD.createPersonal(d, b.pType));
	res.redirect('/');

}

//Display contact information after finding it
exports.grabContact = function (req, res) {
	userD.getUserContact(req.user);
	res.send('Maybe');
}

exports.profile = function (req, res) {
	User
	.findOne(req.params.id)
	.populate('_contact _work _personal _post')
	.exec(function  (err, user) {
		Post.findOne(user._post._id)
		.populate('albumId videoId linkId shareGroup')
		.exec(function (err, pInfo) {
			res.render('database/user/profile',{
					user: req.user,
					work: user._work,
					personal: user._personal,
					post: user._post
			});
		});
			
	}
		
);
	
}
//normal export function
//grab the id by parameter
//req.user._work[0].push((work objectId))

