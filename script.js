// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Define password length");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please select a password length between 8 and 128 characters.");
    return //Condition not met so restart funnction
  }

  alert("Please select how many lower, upper, numerical and special characters you want. Please note: atleast one of these has to be more than zero! If the sum of the selection is greater than your password length, then you will get a randomly assorted password!")
  
  var passwordLower = prompt("How many lowercase characters do you want?", 0);
  var passwordUpper = prompt("How many uppercase characters do you want?", 0);
  var passwordNumeric = prompt("How many numerical characters do you want?", 0);
  var passwordSpecial = prompt("How many special characters do you want?", 0)

  if (passwordLower == 0 && passwordUpper == 0 && passwordNumeric == 0 && passwordSpecial == 0) {
    alert("Atleast one of these has to be more than zero!");
    return //Condition not met so restart funnction
  }

  return {
    passwordLower, passwordSpecial, passwordNumeric, passwordUpper, passwordLength
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);