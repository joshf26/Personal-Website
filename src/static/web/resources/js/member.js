var config = {
	apiKey: "AIzaSyDaSpUW0vdrVahgSw8X2hdPOswaYEgmTE0",
	authDomain: "website-23ad0.firebaseapp.com",
	databaseURL: "https://website-23ad0.firebaseio.com",
	projectId: "website-23ad0",
	storageBucket: "website-23ad0.appspot.com",
	messagingSenderId: "545446778597"
};
firebase.initializeApp(config);

var emailField = document.getElementById("email");
var passwordField = document.getElementById("password");

var modalElement = document.querySelector('.modal');
var modalInstance = new M.Modal(modalElement, {"dismissible": false});

var memberTicketRef;
var memberTicketContainer = document.getElementById("memberTicketContainer");

function login() {
	firebase.auth().signInWithEmailAndPassword(emailField.value, passwordField.value).catch(function(error) {
		M.toast({html: "Invalid username/password.", "classes": "red darken-2"})
	});
}

function signOut() {
	firebase.auth().signOut();
}

function addClient() {
	firebase.auth().createUserWithEmailAndPassword(prompt("Enter client email:"), "password").then(function (user) {
		firebase.database().ref("members/" + user.uid).set({
			first: prompt("Enter client FIRST name:"),
			last: prompt("Enter client LAST name:")
		}).then(function() {
			alert("You will be signed out in order to create the account. Please sign back in.");
			signOut();
		});
	});
}

function addTicket() {
	firebase.database().ref("members/" + firebase.auth().currentUser.uid + "/tickets").push().set({
		"request": prompt("Enter your request:"),
		"fulfilled": false
	});
}

firebase.auth().onAuthStateChanged(function(user) {
	console.log(user);
	if (user) {
		memberTicketRef = firebase.database().ref('members/' + firebase.auth().currentUser.uid + '/tickets');
		memberTicketRef.on('value', function(snapshot) {
			while (memberTicketContainer.firstChild){
				memberTicketContainer.removeChild(memberTicketContainer.firstChild);
			}

			tickets = snapshot.val();
			for (ticketIndex in tickets) {
				var ticket = tickets[ticketIndex];
				var ticketElement = document.createElement("p");
				var ticketElementText = document.createTextNode(ticket.request);
				ticketElement.appendChild(ticketElementText);
				memberTicketContainer.appendChild(ticketElement);
			}
		});
		modalInstance.close();
	} else {
		if (memberTicketRef) memberTicketRef.off();
		modalInstance.open();
	}
});
