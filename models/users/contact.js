var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var contactSchema = Schema({
	contactMethod: String,
	phoneNumber:
	{
		countryCode : {type :Number, index: true},
		areaCode : {type : Number, default: 555},
		firstThree : {type : Number, default: 555},
		lastFour : {type : Number, default: 5555}
	}
});

module.exports = mongoose.model('Contact', contactSchema);