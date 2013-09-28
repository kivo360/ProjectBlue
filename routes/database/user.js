/*
* This will be a way you can push Object Ids into different arrays
* I realized that there is a big issue about readablity inside of my code in the API file
* Therefore I say that there needs to be a seperate class that will allow you to push and update information to the user
*/

//Import all of the relavant models in global variables
var mongoose = require('mongoose'),
	User = require('./../../models/users/user.js'),
	Employment = require('./../../models/users/employ.js'),
	Contact = require('./../../models/users/contact.js'),
	Work = require('./../../models/users/work.js'),
	Personal = require('./../../models/users/personal.js'),
	Schema = mongoose.Schema;


//Saves the User after accepting basic parameters
exports.addUser = function  (nEmail, nPass, nFirst, nMiddle, nLast) {
	new User({
			email: nEmail,
			password: nPass,
			first : nFirst,
			middle: nMiddle,
			last: nLast
		}).save(function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log('user %s %s is saved', nFirst, nLast);
			}
	});
}


//Accepts the perfered method, area code, first three digits, and the last four
exports.addContact = function(cmethod, cCode, aCode, three, four) {
	var newContact = new Contact({
		contactMethod: cmethod,
		phoneNumber: {
			countryCode: cCode,
			areaCode: aCode,
			firstThree: three,
			lastFour: four
		}
	});
	return newContact;
}

//Accepts contact and user parameter 
//It pushed the contact into the user then saves
exports.pushContactToUser = function (user, contact) {
	user._contact.push(contact);
	user.save();
}

exports.editUserContact = function (user, newPreMethod) {
	User
	.findById(user._id)
	.populate('_contact')
	.exec(function (err, users) {
		users._contact[0].update({contactMethod: newPreMethod});
	});

}

exports.createPersonal = function (bDay, pType) {
	//Creates a personality type for the user and adds the 
	var personType = new Personal({
		birthday: bDay,
		personalityType: pType
	});
	return personType;
}

exports.editPersonal = function (user, bDay, pType, location) {
	User
	.findById(user._id)
	.populate('_personal')
	.exec(function (err, users) {
		if(pType !== null){
			users._personal[location].update({contactMethod: newPreMethod, personalityType: pType});
		}else{
			users._personal[location].update({contactMethod: newPreMethod, personalityType: users._personal.personalityType});
		}
	});
}



exports.addPersonal = function (user, personal) {
	user._personal.push(personal);
	user.save(function (err, per) {
		if (err) {
			console.log('The personality profile didnt save properly');
		}else{
			console.log('message');
		}

	});
}

