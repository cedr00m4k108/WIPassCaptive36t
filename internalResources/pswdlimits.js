function certainChars(inputElement) {
	const chars = /[^0-9A-Fa-f+\-*/$%#=]/g;
	inputElement.value = inputElement.value.replace(chars, '');
}
function certainCharsHex(inputElement) {
	const charshex = /[^0-9A-Fa-f]/g;
	inputElement.value = inputElement.value.replace(charshex, '');
}
function pswdusrGo() {
	console.log("Checking all of these fields... Please don't close this application...");
}