// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// let num1 = +prompt("Please enter first no: ");
// let num2 = +prompt("Please enter second no: ");
// let res = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " +  res );

//_______________ ********** _______________ *//
  
// 2. Repeat task1 for subtraction, multiplication, division & modulus

//_______________ FOR SUBTRACTION  _______________ *//

// let num1 = +prompt("Please enter first no: ");
// let num2 = +prompt("Please enter second no: ");
// let res = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " +  res );


//_______________ FOR MULTIPLICATION  _______________ *//

// let num1 = +prompt("Please enter first no: ");
// let num2 = +prompt("Please enter second no: ");
// let res = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " +  res );


//_______________ FOR DIVISION  _______________ *//

// let num1 = +prompt("Please enter first no: ");
// let num2 = +prompt("Please enter second no: ");
// let res = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " +  res );

//_______________ FOR MODULUS  _______________ *//

// let num1 = +prompt("Please enter first no: ");
// let num2 = +prompt("Please enter second no: ");
// let res = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " +  res );

//_______________ ********** _______________ *//


// // 3. Do the following using JS Mathematic Expressions
// // a. Declare a variable.
//  let var1;
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//  console.log("Value after variable declaration is : " + var1);
// // c. Initialize the variable with some number.
//   var1 = 5;
// // d. Show the value of variable in your browser like “Initial value: 5”.
//  console.log("Initial value: " + var1);
// // e. Increment the variable.
//  var1++;
// // f. Show the value of variable in your browser like “Value after increment is: 6”.
//  console.log("Value after increment is: " + var1);
// // g. Add 7 to the variable.
//   var1 += 7;
// // h. Show the value of variable in your browser like “Value after addition is: 13”.
//  console.log("Value after addition is: " + var1);
// // i. Decrement the variable.
//  var1--;
// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
//  console.log("Value after decrement is: " + var1);
// // k. Show the remainder after dividing the variable’s value by 3.
//   var1 %= 3; 
// // l. Output : “The remainder is : 0”.
//  console.log("The remainder is : " + var1);

//_______________ ********** _______________ *//


// //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
// // tickets to a movie.
//  let ticketPrice = 600;
//  let totalTickets = 5;
//  let cost = ticketPrice * totalTickets;
//  console.log("Total cost to buy " + totalTickets + " tickets to a movie is " + cost + "PKR" );

 //_______________ ********** _______________ *//

 //_______________ ********** _______________ *//
//_______________ ********** _______________ *//
// var str = prompt("Enter some text");
// for (var i = 0; i < str.length ; i++) {
// if (str.slice(i, i + 2) === "  ") {
// alert("No spaces!");
// break;
// }
// }
let text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his";
 for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 9) === "World War") {
 text =  text.slice(0, i) + "the Second World War" + text.slice(i + 9);
 }}
 document.write(text)
    