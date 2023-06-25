  // ********* CHAPTER 9-11 *********
 
 
 //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
 //  let userInput = prompt("Please enter city name: ");
 //  if( userInput === "Karachi" || userInput === "karachi" || userInput === "KARACHI" ){
 //     alert("Welcome to city of lights");
 //  }

    //_______________ ********** _______________ *//


 //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
 //   let userInput = prompt("Please enter your gender: ");
 //   if (userInput === "male" || userInput === "Male" || userInput === "MALE"){
 //    alert("GOOD MORNING SIR! ")
 //   }
 //   else if(userInput === "female" || userInput === "Female" || userInput === "FeMALE"){
 //    alert("GOOD MORNING MA'AM! ");
 //   }
 //   else
 //   {
 //    alert("SORRY! Please enter gender");
 //   }

    //_______________ ********** _______________ *//


  //3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
 //   let trafficLight = prompt("Enter Traffic Signal Light");
 //   if (trafficLight === "red" || trafficLight === "Red" || trafficLight === "RED") {
 //    alert("Must Stop");
 //   } 
 //    else if (trafficLight === "yellow" || trafficLight === "Yellow" || trafficLight === "YELLOW")  {
 //    alert("Ready to move");
 //  }
 //    else if (trafficLight === "green" || trafficLight === "Green" || trafficLight === "GREEN") {
 //    alert("Move now");
 //    }
 //    else if(trafficLight === null || trafficLight === ""){
 //    alert("Enter Any Light Color");
 //  }
 //  else {
 //    alert("SORRY! Please enter valid colour");
 //    }
      //_______________ ********** _______________ *//


  //4. Write a program to take input remaining fuel in car (in  litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
 //   let fuel = +prompt("Please enter remaining fuel of car in litres");
 //    if (fuel < 0.25) {
 //    alert("Please refill the fuel in your car");
 //    }
  
     //_______________ ********** _______________ *//

 //5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
 //a. var a = 4;
 //if (++a === 5){
 //alert("given condition for variable a is true");
 //} 
 //b. var b = 82;
 //if (b++ === 83){
 //alert("given condition for variable b is true");
 //}
 //c. var c = 12;
 //if (c++ === 13){
 //alert("condition 1 is true");
 //}
 //if (c === 13){
 //alert("condition 2 is true");
 //}
 //if (++c < 14){
 //alert("condition 3 is true");
 //}
 //if(c === 14){
 //alert("condition 4 is true");
 //}
 //  d. var materialCost = 20000;
 //  var laborCost = 2000;
 //  var totalCost = materialCost + laborCost;
 //  if (totalCost === laborCost + materialCost){ 
 //  //alert("The cost equals");
 //}
 // e. if (true){
 //alert("True");
 //}
 //if (false){
 //alert("False");
 //}
 //f. if("car" < "cat"){
 //alert("car is smaller than cat");
 //}

   //_______________ ********** _______________ *//


 //6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
 // let obtainedMarks = +prompt("Enter Obtained marks");
 // let totalMarks = +prompt("Enter total marks");
 // let percentage = obtainedMarks / totalMarks * 100;
 //    if(percentage >= 80 && percentage <= 100){
 //    Grade = "A-One"
 //    Remarks = "Excellent"
 // }
 //    else if(percentage >=70 && percentage <=80 ) {
 //     Grade = "A"
 //     Remarks = "Good"
 // }
 //    else if(percentage >=60 && percentage <=70 ) {
 //     Grade = "B"
 //     Remarks = "You Need To Improve"
 // }
 //    else if (percentage < 60 ) {
 //     Grade = "Fail"
 //     Remarks = "Sorry"
 //  }
 //    else{
 //    ("SORRY! Please enter valid percentage ");
 //    }
 // document.write("<h1><b>" + "MARKSHEET" + "</h1></b>");
 // document.write("<h2><b>" + "Total Marks : " +  totalMarks + "</h2></b>");
 // document.write("<h2><b>" + "Percentage : " +  percentage + "%" + "</h2></b>");
 // document.write("<h2><b>" + "Grade : " +  Grade + "</h2></b>");
 // document.write("<h2><b>" + "Remarks : " +  Remarks + "</h2></b>");

  //_______________ ********** _______________ *//

  ////7. Guess game:
 //Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
 //a. If user guesses the same number, show “Bingo! Correct answer”.
 //b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
 //  let secretNum = 3;
 //  let guessNum = +prompt("Guess the number : ");
 //   if (guessNum == secretNum){
 //    alert("Bingo! Correct answer ")
 //  }
 //   else if (guessNum == (secretNum + 1)){
 //    alert("Close enough to the correct answer")
 //   } 
 //    else 
 //    {
 //    alert("SORRY! you entered wrong number")
 //    }

  //_______________ ********** _______________ *//


  // //8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
 // let num = +prompt("Please enter a number");
 // if(num % 3 == 0){
 //     alert("The number is divisible by 3");
 // }
 // else{
 //   alert("The number is not divisible by 3");
 //   }

   //_______________ ********** _______________ *//

 //9. Write a program that checks whether the given input is an even number or an odd number.
 //let num = +prompt("Please enter a number");
 // if(num % 2 == 0){
 //   alert("The number is even");
 // }
 // else{
 //   alert("The number is odd");
 //   }
 
  //_______________ ********** _______________ *//


 ////10. Write a program that takes temperature as input and shows a message based on following criteria
 //a. T > 40 then “It is too hot outside.”
 //b. T > 30 then “The Weather today is Normal.”
 //c. T > 20 then “Today’s Weather is cool.”
 //d. T > 10 then “OMG! Today’s weather is so Cool.”
 //let temp = +prompt("Please enter temprature");
 // if(temp > 40){
 //   alert("It is too hot outside.");
 //   }
 //   else if(temp > 30){
 //   alert("The Weather today is Normal.");
 //   }
 //   else if(temp > 20){
 //   alert("Today's Weather is cool.");
 //   }
 //   else if(temp > 10){
 //   alert("OMG! Today's weather is so Cool.");
 //   }
 //   else
 //   alert("SORRY! Plaese enter correct temperature");

   //_______________ ********** _______________ *//


 ////11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
 //a. First number
 //b. Second number
 //c. Operation (+, -, *, /, %) Compute & show the calculated result to user
 // let num1 = +prompt("Please enter first number: ");
 // let num2 = +prompt("Please enter second number: ");
 // let op = +prompt("Please enter operation")
 // if(op == "+"){
 //  alert(num1 + num2)
 // }
 // else if(op == "-"){
 //  alert(num1 - num2)
 // }
 //else if(op == "*"){
 //  alert(num1 * num2)
 // }
 // else if(op == "/"){
 //  alert(num1 / num2)
 // }
 // else if(op == "%"){
 //  alert(num1 % num2)
 // }
 // else
 // alert("SORRY! You entered invalid operation")