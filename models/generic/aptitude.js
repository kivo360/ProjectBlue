/*
* This file will have help create an apptitude rating for each profession
* Each person will be allowed to have an apptitude rating
* An aptitude rating is a method to judge a person in each category of certain subjects
* A person and career will be judged via in the following ways:
* Interpersonal Skills, Language skills, Algorithm Comprehension, Algorithm Generation, 
* Motor Skill level (minimum level for certain jobs), Imagination, Artistic Skill, Visual Comprehension,
* Technical Aptitude or Ability to tinker (Will have minimum for cetain jobs), Adaptablity (ability to learn and transition),
* Memory Skills, Level of Action (Willingness to respond to complete task) 
**/

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var aptitudeSchema = Schema({
	//What or who this rating is targeted towards
	objectName: String,
	//Interpersonal Skills
	intPerson: Number,
	//Linguistic skill
	lingo: Number,
	//Speaking Skills
	speech: Number,
	//Algohrithm Comprehension
	alComp: Number,
	//Algorithm Generation
	alGen: Number,
	//Motor Skills
	motor: Number,
	//Creativity
	create: Number,
	//Artistic Skills
	art: Number,
	//Visual Comprehension
	vComp: Number,
	//Technical Aptidude
	tech: Number,
	//Adaptablity
	adapt: Number,
	//Capacity to remember things
	memory: Number,
	//Willingness to act on certain things
	action: Number
});

module.exports = mongoose.model('Aptitude', aptitudeSchema);