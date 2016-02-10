function fancyLog(text){
  var theText = document.createTextNode(text);
  var theP = document.createElement("p");
  theP.appendChild(theText);
  document.querySelector('#log').appendChild(theP);
}

// 1) First, alter the function above, fancyLog(), to add an LI to the #log UL instead of a paragraph.

function fancyLog(text){
  var theText = document.createTextNode(text);
  var theP = document.createElement("li");
  theP.appendChild(theText);
  document.querySelector('#log').appendChild(theP);
}

/**
*
* 2) Write a function that will take a parameter, a number grade. Use fancyLog() to log the parameter that is passed
* Use if statements to convert that number to a letter grade, using the info below (relax...it's not real):
*
* < 60  F
* 61 - 69 D
* 70 - 79 C
* 80 - 86 B
* 87 - 89 B+
* 90 - 94 A-
* 95 - 100  A
* 
* In your code, fancyLog the results in this format: "Your grade is {lettergrade}."
*
*/ 

function grade1(grade) {
  if (grade < 60){
    var graded = "F";
  };
  
  if ((grade >= 61) && (grade <= 69)) {
    var graded = "D";
  };
  
  if ((grade >= 70) && (grade <= 79)) {
    var graded = "C";
  };
  
  if ((grade >= 80) && (grade <= 86)) {
    var graded = "B";
  };
  
  if ((grade >= 87) && (grade <= 89)) {
    var graded = "B+";
  };
  
  if ((grade >= 90) && (grade <= 94)) {
    var graded = "A-";
  };
  
  if ((grade >= 95) && (grade <= 100)) {
    var graded = "A";
  };
  
 fancyLog("Your grade is " + graded + ".");
  
  
};

/**
*
* 3) Write a function that will evaluate a parameter and compare it to a variable, password. 
* DO NOT CALL THE FUNCTION YET
* Make the password "javascript". If the password that is passed to the function is correct, REMOVE the class "hidden" 
* from the log and ADD the class "shown". Also, call fancyLog() and log the text "welcome to the page!" 
* Finally, if the password is correct, use prompt() to ask the user for their number grade. 
* Call the function you wrote above.
* If the password is wrong, turn the page red and display a big old message "YOU SHALL NOT PASS!"
*
*/ 
var password = "javascript";

function compare(choice1) {
  if (choice1 == password) {
    document.getElementById("log").className = "shown";
    fancyLog("welcome to the page!");
   var numberPerson = prompt("Whats your number grade?");
    grade1(numberPerson)  
  }
  
  else {
    document.body.className += " red";
    var text = document.createTextNode("YOU SHALL NOT PASS");
  var gan = document.createElement("h1");
  gan.appendChild(text);
  document.querySelector('body').appendChild(gan);
  };
};

/** 
*
* Finally, prompt the user for a password. Then use that input to call the function you wrote above.
*
*/

var usrpass = prompt("password?");
compare(usrpass);