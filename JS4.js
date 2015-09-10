var howManyVictims = prompt("Entered estimated number victims in need:")
var victimNames = []
var victimPhones = []
var victimAddresses = []
var victimInfo = {

};
for ( i = 0; i < +howManyVictims; i++) {
	var victimName = prompt("Enter victim's first and last name: ")
	var phoneNumber = prompt("Enter victim's phone number: ")
	var address = prompt("Enter victim's address: ")

	
	victimNames.push(victimName);
	victimPhones.push(phoneNumber);
	victimAddresses.push(address);

	console.log(victimNames)
	console.log(victimPhones)
	console.log(victimAddresses)
};

var howManyVolunteers = prompt("Entered estimated number of volunteers needed:")
var volunteerNames = []
var volunteerPhones = []
var volunteerAddresses = []
var volunteerInfo = {

};
for ( i = 0; i < +howManyVolunteers; i++) {
	var volunteerName = prompt("Enter volunteer's first and last name: ")
	var phoneNumber = prompt("Enter volunteer's phone number: ")
	var address = prompt("Enter volunteer's address: ")

	
	volunteerNames.push(volunteerName);
	volunteerPhones.push(phoneNumber);
	volunteerAddresses.push(address);

	console.log(volunteerNames)
	console.log(volunteerPhones)
	console.log(volunteerAddresses)
};

alert( "We currently have " + howManyVictims + " victims, and " + howManyVolunteers + " volunteers. The Victims are " + victimNames + "and the volunteers are " + volunteerNames + "." )







