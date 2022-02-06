// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}


const form = document.querySelector("#login");

const NAME_REQUIRED = "Please enter your name";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let pwlValid = hasValue(form.elements["password"]);
	// if valid, submit the form.
	if (nameValid  && pwlValid) {
		alert("Datos introducidos: " + "\nNombre: " + form.elements["name"].value +  "\nContraseña: " + form.elements["password"].value);
	}

});