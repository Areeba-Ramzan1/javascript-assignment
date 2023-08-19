 
    // ********* CHAPTER 26-30 ********* 


  ////1. Write a program that takes a positive integer from user & display the following in your browser.
 //  a. number
 //  b. round off value of the number
 //  c. floor value of the number
 //  d. ceil value of the number
 
 //  let userInput = +prompt("PLease enter positive number: ");

 //  if(userInput > 0){  
 //  document.write("<h3>" + "Number:" + userInput + "</h3>");
 //  document.write("<h3>" + "Round off value:" + Math.round(userInput) + "</h3>");
 //  document.write("<h3>" + "Floor value:" + Math.floor(userInput)  + "</h3>");
 //  document.write("<h3>" + "Ceil value:" + Math.ceil(userInput) + "</h3>");
 // }
 //  else{
 //     alert("Sorry! You entered invalid number.")
 //  }

   //_______________ ********** _______________ *//


  ////2. Write a program that takes a negative floating point number from user & display the following in your browser.
 //  a. number
 //  b. round off value of the number
 //  c. floor value of the number
 //  d. ceil value of the number

 //let userInput = +prompt("PLease enter negative floating point number: ");

 //  if(userInput < 0){  
 //  document.write("<h3>" + "Number:" + userInput + "</h3>");
 //  document.write("<h3>" + "Round off value:" + Math.round(userInput) + "</h3>");
 //  document.write("<h3>" + "Floor value:" + Math.floor(userInput)  + "</h3>");
 //  document.write("<h3>" + "Ceil value:" + Math.ceil(userInput) + "</h3>");
 // }
 //  else{
 //     alert("Sorry! You entered invalid number.")
 //  }

   //_______________ ********** _______________ *//


  ////3. Write a program that displays the absolute value of a number.
  //E.g. absolute value of -4 is 4 & absolute value of 5 is 5

 //  let userInput = +prompt("PLease enter negative number: ");
 //  let absValue = Math.abs(userInput);
 //  document.write("<h3>" + "The absolute value of" + userInput + " " + "is " + absValue + "</h3>");

    //_______________ ********** _______________ *//


  ////4. Write a program that simulates a dice using random() method of JS Math class. 
  //Display the value of dice in your browser.:

 // let randomValue = Math.random();
 // randomValue = Math.floor(randomValue * 6) + 1;
 // document.write("<h2>" + "Random dice value:" + randomValue + "</h2>");

    //_______________ ********** _______________ *//


  ////5. Write a program that simulates a coin toss using random() method of JS Math class.Display the value of coin in your browser.
 //  let randomValue = Math.random();
 //  randomValue = Math.floor(randomValue * 2) + 1;

 //  if(randomValue === 1){
 //   document.write("<h2>" + randomValue + "<br>" + "Random coin value:" + "Heads" + "</h2>")
 //  }
 //  else{
 //   document.write("<h2>" + randomValue + "<br>" + "Random coin value:" + "Tails" + "</h2>")
 //  }

   //_______________ ********** _______________ *//


  ////6. Write a program that shows a random number between 1 and 100 in your browser.

 // let randomNum = Math.random();
 // randomNum = Math.floor(randomNum * 100) + 1;
 // document.write("<h3>" + "Random number between 1 to 100 is :" + " " + randomNum + "</h3>");

   //_______________ ********** _______________ *//


  ////7. Write a program that stores a random secret number from 1 to 10 in a variable. 
  //Ask the user to input a number between 1 and 10.If the user input equals the secret number, congratulate the user.

 // let randomNum = Math.random();
 // let secretNum = +prompt("Please enter secret number from 1 to 10:");
 // randomNum = Math.floor(randomNum * 10) + 1;

 //  if(secretNum === randomNum){
 //     document.write("<h3>" + "Bravo!🎉You Won😍" + "</h3>");
 //  }
 //  else{
 //     document.write("<h3>" + "Sorry!😞 You lost🙁, the secret number is " + randomNum + "</h3>")
 //  }

