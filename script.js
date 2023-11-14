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

//Array to join all the above characters
allCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Define password length");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please select a password length between 8 and 128 characters.");
    return getPasswordOptions() //Condition not met so restart funnction
  }

  alert("Please select how many lower, upper, numerical and special characters you want. Please note: atleast one of these has to be more than zero! If the sum of the following selections do not equal your password length, then you will get an assorted password that do not match your requirements exactly!")
  
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
  var n = Math.floor(Math.random() * arr.length);
  return arr[n];
}

// Function to generate password with user input
function generatePassword() {
  var passwordCriteria = getPasswordOptions();
  var passwordArray = [] //password array

  //Add lower case charaters in password arrays
  for (var i = 0; i < passwordCriteria.passwordLower; i++){
    passwordArray.push(getRandom(lowerCasedCharacters))
  }

  //Add upper case charaters in password arrays
  for (var i = 0; i < passwordCriteria.passwordUpper; i++){
    passwordArray.push(getRandom(upperCasedCharacters))
  }

  //Add numeric charaters in password arrays
  for (var i = 0; i < passwordCriteria.passwordNumeric; i++){
    passwordArray.push(getRandom(numericCharacters))
  }

  //Add special case charaters in password arrays
  for (var i = 0; i < passwordCriteria.passwordSpecial; i++){
    passwordArray.push(getRandom(specialCharacters))
  }

  //randomise the password array
  passwordArray.sort((a,b) => Math.random() - 0.5); 

  //If the password array is bigger than the password length requirement then truncate till length requirement is met.
  while (passwordArray.length > passwordCriteria.passwordLength){
    passwordArray.pop()
  }

  //If the password array is smaller than the password length requirement then add random characters till length requirement is met.
  while (passwordArray.length < passwordCriteria.passwordLength){
    passwordArray.push(getRandom(allCharacters))
  }
  
  password = passwordArray.join("")

  return password;
  
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