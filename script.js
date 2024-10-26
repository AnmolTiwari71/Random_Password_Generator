const passwordBox = document.getElementById("Password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChars = upperCase + lowerCase + number + sym;

function createPassword() {
    let Password = ""; // Initialize Password as an empty string

    // Ensure password has at least one character from each type
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += sym[Math.floor(Math.random() * sym.length)];

    // Fill the rest of the password with random characters until it reaches the specified length
    while (Password.length < length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display the password in the input box
    passwordBox.value = Password;
}