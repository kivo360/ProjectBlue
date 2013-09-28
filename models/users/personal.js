var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var personalSchema = Schema({
	birthday:{type: Date, default:Date.now},
	personalityType: String
});

module.exports = mongoose.model('Personal', personalSchema);