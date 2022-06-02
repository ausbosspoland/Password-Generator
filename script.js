// Assignment code here

const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const specialCharacters = ["!", "@", "#", "$", "%", "*"]

const numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

let approvedList = []

let globalPassword = ''


//password length
const length = () => {
  let userInput = 0
  while (userInput < 8 || userInput > 128 ) {
  userInput = window.prompt("Enter a password length between 8 and 128 characters.")
  }
  return userInput
}


//Build array
const arrayBuilder = (type, array) => {
  let userInput = window.prompt(`Yes or No - include ${type}?`).toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":

    
      globalPassword = globalPassword + array[randomNum(array.length)]

      //creating list
      approvedList = approvedList.concat(array)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      arrayBuilder(type, array)
  }
}

//function to generate random numbers
const randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

const generatePassword = () => {
  
  //get password length
  const passwordLength = length()
  
  //include lower case?
  arrayBuilder("lower case characters", lowerCharacters)
 
  //include upper case?
  arrayBuilder("upper case characters", upperCharacters)
 
  //include numbers?
  arrayBuilder("numbers", numbersList)

  //include special characters?
  arrayBuilder("special characters", specialCharacters)

  //confirm approved list is not empty - if empty - restart
 if (approvedList.length > 0) {
  //generate string
     for (let i = globalPassword.length; i < pwLength; i++){
    //select random from approvedList array
    globalPassword = globalPassword + approvedList[randomNum(approvedList.length)]
  }
} else {
  window.alert("You need to select at least one character type.")
  generatePassword()
}
  
  return globalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


    globalPassword = ''
    approvedList = []
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);