/**
 * @author Kevin Hill
 */

"use strict";


var totals = new Length();
var person = new personality();

function Length(){
	var ieLength = 1;
	var snLength = 0;
	var tfLength = 0;
	var jpLength = 0;
	
	var I_E = 0;
	var S_N = 0;
	var T_F = 0;
	var J_P = 0;
	
	return{
		/**Length*/
		setIELength:function(newLength){ ieLength = newLength;},
		getIELength:function(){return ieLength;},
		
		setSNLength:function(newLength){ snLength = newLength;},
		getSNLength:function(){return snLength;},
		
		setTFLength:function(newLength){ tfLength = newLength;},
		getTFLength:function(){return tfLength;},
		
		setJPLength:function(newLength){ jpLength = newLength;},
		getJPLength:function(){return jpLength;},
		
		/**Point tally*/
		setIE:function(newLength){I_E = newLength;},
		getIE:function(){return I_E;},
		
		setSN:function(newLength){S_N = newLength;},
		getSN:function(){return S_N;},
		
		setTF:function(newLength){T_F= newLength;},
		getTF:function(){return T_F;},
		
		setJP:function(newLength){J_P = newLength;},
		getJP:function(){return J_P;}
		
	};
}



function addPoint(type, trueFalse) {
	
	switch(type) {
		case 1:
			totals.setIELength(totals.getIELength()+1);
			
			if (trueFalse === 1) {
				totals.setIE(totals.getIE()+1);

				console.log("IE Score = " + totals.getIE());
				
			} else if (trueFalse === 0) {
				console.log("IE Score = " + totals.getIE());
				
			}
			break;
		case 2:
			totals.setSNLength(totals.getSNLength() +1);
			
			if (trueFalse === 1) {
				totals.setSN(totals.getSN()+1);
				
				console.log("SN Score = " + totals.getSN());

			} else if (trueFalse === 0) {
				
				console.log("SN Score = " + totals.getSN());	
			}
			break;
		case 3:
			totals.setTFLength(totals.getTFLength() +1);
			
			if (trueFalse === 1) {
				totals.setTF(totals.getTF()+1);
				console.log("TF Score = " + totals.getTF());
				

			} else if (trueFalse === 0) {
				
				console.log("TF Score = " + totals.getTF());
				
			}
			break;
		case 4:
			totals.setJPLength(totals.getJPLength() +1);
			
			if (trueFalse === 1) {

				totals.setJP(totals.getJP()+1);
				console.log("Judging");
				console.log("Score = " + totals.getJP());
				

			} else if (trueFalse === 0) {
				console.log("Percieving");
				console.log("Score = " + totals.getJP());
			}
			break;
		default:
			console.log("Not a reasonable number");

	}
}

function reset () {
	totals.setIELength(0);
	totals.setSNLength(0);
	totals.setTFLength(0);
	totals.setJPLength(0);

}

function calcTotals(pType) {
	//Divide the total question number in half
	switch(pType) {
		case 1:
			var iOrE = null;
			var ie;
			ie = totals.getIELength() / 2.0;
			if (totals.getIE() >= ie) {
				iOrE = "E";
				person.setIE(iOrE);
			} else {
				iOrE = "I";
				person.setIE(iOrE);
			}
			console.log("The IE half mark is " + ie);
			//person.setiOrE(iOrE);
			console.log("You are a(n) " + iOrE);

			break;
		case 2:
			var sn = totals.getSNLength() / 2.0;
			var sOrN;
			if (totals.getSN() >= sn) {
				sOrN = "S";
				person.setSN(sOrN);
			} else {
				sOrN = "N";
				person.setSN(sOrN);
			}
			console.log("The NS half mark is " + sn);
			console.log("You are a(n) " + sOrN);
			

			break;
		case 3:
			var tf = totals.getTFLength() / 2.0;
			var tOrF;

			if (totals.getTF() >= tf) {
				tOrF = "T";
				person.setTF(tOrF);
			} else {
				tOrF = "F";
				person.setTF(tOrF);
			}
			console.log("The TF half mark is " + tf);

			
			console.log("You are a(n) " + tOrF);

			break;
		case 4:
			var jp = totals.getJPLength() / 2.0;
			var jOrP;

			if (totals.getJP >= jp) {
				jOrP = "J";
				person.setJP(jOrP);
			} else {
				jOrP = "P";
				person.setJP(jOrP);
			}
			
			console.log("The JP half mark is " + jp);
			//person.setjOrP(jOrP);
			console.log("You are a(n) " + jOrP);
			break;
		default:
			console.log("No Good");

	}

	//if point total is > half the number of questions
	//it leans one way, over another. Set the personality type
}


function calcAll(){
	for(var i = 1; i < 5;i++){
		calcTotals(i);
	}
	return person.getAll();
}

/**********************************************************Personality Object****************************************************************/
/**
 * This is the object to that will allow the user to enter their name(First and Last).
 * The program is then able to 
 */
function personality() {
	
	var firstName = undefined;
	var lastName = undefined;
	var ie, sn, tf, jp;
	var allP = undefined;
	return{
		/** The setters **/
		
		setFirstName:function(fName){firstName = fName;},
		setLastName:function(lName){lastName = lName;},
		setIE:function(ieNew){ie = ieNew;},
		setSN:function(snNew){sn = snNew;},
		setTF:function(tfNew){tf = tfNew;},
		setJP:function(jpNew){jp = jpNew;},
		
		/** The getters **/
		
		getIE:function(){return ie;},
		getSN:function(){return sn;},
		getTF:function(){return tf;},
		getJP:function(){return jp;},
		getAll:function(){
			allP = ie+sn+tf+jp;
			return allP;
		}
	};
	

}


/************************************************************Prompt Data********************************************************************/
