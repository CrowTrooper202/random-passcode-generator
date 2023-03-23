// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// #////T/F code with range#


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '.', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',]


//how am i going to get users password lngth?
//prompt?
function generatePassword() {
  var password = prompt("Please give a password length between 8 and 128 charcters long. please use digits")
  if (password > 7 && password < 129) {
    // generatePassword()
  }
  else { 
    alert("Please give a password length between 8 and 128 charcters long. please use digits")
    return; 
  }

  var newArray = []
  var letterCap = confirm("do you want capitilized letters?")

  if (letterCap) {
    newArray = newArray.concat(capLetters)
    console.log(newArray)
  }
  var letterLower = confirm("do you want lower case letter?")
  if (letterLower ) {
    newArray = newArray.concat(lowLetters)
  }
  var digits = confirm("do you want lower case?")
  if (digits) {
    newArray = newArray.concat(numbers)
  }
  var char = confirm("Do you want special characters?")
  if (char) {
    newArray = newArray.concat(specialChar)
  }
  
  console.log(newArray)
  for (let i = 0; i < password; i++) {
    var index = Math.floor(Math.random() * newArray.length)
    console.log(newArray[index])
  }
}

// for (let i = 0; i < array.length; i++) {



//   return
// }



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

