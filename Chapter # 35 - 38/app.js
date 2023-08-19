
     // ********* CHAPTER 35-38 *********

  ////1. Write a function that displays current date & time in your browser.

 // function date(){
 //   alert(new Date());
 //   document.write(new Date());
 //  }
 //   date();

     //_______________ ********** _______________ *//


     ////2. Write a function that takes first & last name and then it greets the user using his full name.

 //  function greet(){
 //    let firstName = prompt("Please enter your first name: ");
 //    let lastName = prompt("Please enter your last name: ");
 //     document.write("Salam! " + firstName + " " + lastName);
 //  }
 //  greet();

     //_______________ ********** _______________ *//


     ////3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

 //  function sum(){
 //    let num1 = +prompt("Please enter first number:");
 //    let num2 = +prompt("Please enter second number:");
 //     return num1 + num2;
 //   }
 //   document.write("<h3>" + "The sum of two number is " + sum() + "</h3>");

     //_______________ ********** _______________ *//
     

     ////4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
    // Return and show the desired result in your browser.

   // function calculator(){

    //  let num1 = +prompt("Please enter first number:");
    //  let num2 = +prompt("Please enter second number:");
    //  let operator = prompt("Please enter operator for operation:");

    //  switch(operator){
    //   case "+":
    //     return num1 + num2;
    //     break;
        
    //     case "-":
    //     return num1 - num2;
    //     break;

    //     case "*":
    //     return num1 * num2;
    //     break;

    //     case "/":
    //     return num1 / num2;
    //     break;

    //     case "%":
    //     return num1 % num2;
    //     break;

    //     default:
    //         return "Sorry! You entered invalid operator";
    //  }
    // }
    // document.write("<h3>" + "Result " + calculator() + "</h3>");

     //_______________ ********** _______________ *//


     ////5. Write a function that squares its argument.

 // function square(){
 //   let num = +prompt("Please enter a number: ");
 //   let squareNum = num * num;
 //     document.write("<h3>" + "The square of " + num + " " + "is " + squareNum + "</h3>");
 //  }
 //  square();

     //_______________ ********** _______________ *//


     ////6. Write a function that computes factorial of a number.

 // function factorial(){
 //  let num = +prompt("Please enter number:");
 //  let result = num;
 //   for(i = num; i > 1; i--){
 //     result = result *(i-1);
 //  }
 //   document.write("<h3>" + "The factorial of " + num + " " + "is " + result);
 //  }
 //   factorial(); 

     //_______________ ********** _______________ *//

     ////7. Write a function that take start and end number as inputs & display counting in your browser.

 // function counting(){
 //  let startNum = +prompt("Please enter starting number:");
 //  let endNum = +prompt("Please enter ending number:");
 //    for(i = startNum; i <= endNum; i++){
 //      document.write("<b>" + i + "</b><br>");
 //    }
 // }
 //  counting();

       //_______________ ********** _______________ *//


     ////8.  Write a nested function that computes hypotenuse of a right angle triangle. 
    //Hypotenuse2 = Base2 + Perpendicular2
    //Take base and perpendicular as inputs.
    //Outer function : calculateHypotenuse()
    //Inner function: calculateSquare()

 // function calculateHyp(){
 //  let base = +prompt("Please enter base value of right angle triangle: ");
 //  let perp = +prompt("Please enter perpendicular value of right angle triangle: ");
 //   function square(){
 //    let result = (base * base) + (perp * perp);
 //     result = Math.sqrt(result);
 //     document.write("<h3>" + "Hypotenuse of right angle triangle is " + result);
 //   }
 //   square(); 
 // }
 //  calculateHyp();
   
     //_______________ ********** _______________ *//


     ////9. Write a function that calculates the area of a rectangle. A = width * height
   //Pass width and height in following manner:
   //i. Arguments as value
   //ii. Arguments as variables

 // let width = +prompt("Please enter the value of width: ");
 // let height = +prompt("Please enter the value of height: ");

 //  function rectangleArea(width,height){
 //    let area = width * height;
 //     document.write("<h3>" + "Area of rectangle is " + area + "</h3>");
 //   }
 //    rectangleArea(width,height);

     //_______________ ********** _______________ *//


     ////10. Write a JavaScript function that checks whether a passed string is palindrome or not?
    //A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

 // function palindrome(){
 //   let palinNum = prompt("Please enter palindrome: ");
 //   palinNum = palinNum.toLowerCase();
 //   let checkPalin = palinNum.split('').reverse().join('');
         
 //    if(checkPalin === palinNum){
 //       document.write("<h3>" + "The given string " + palinNum + " is a palindrome" + "</h3>");
 //     }
 //     else{
 //       document.write("<h3>" + "The given string " + palinNum + " is not a palindrome" + "</h3>");
 //     }
 // }
 //  palindrome();

     //_______________ ********** _______________ *//


     ////11. Write a JS function that accepts a string as a parameter & converts the 1st letter of each word of string in upper case. 
    //EXAMPLE STRING : 'the quick brown fox'
    //EXPECTED OUTPUT : 'The Quick Brown Fox'
    
 // let inputString = prompt("Please enter string:");
 // let word;
 //  function uppercaseString(){
 //    word = inputString.split(" ");
 //     for(i = 0; i < word.length; i++){
 //      let firstLetter = word[i].charAt(0);
 //      word[i] = firstLetter.toUpperCase() + word[i].slice(1);
 //     }
 //     return word.join(" ");
 //  }
 //  document.write("<h3>" + "The given string: " + inputString + "</h3>");
 //  document.write("<h3>" + "Expected Output: " + uppercaseString(inputString) + "</h3>");
    
     //_______________ ********** _______________ *//


     //// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
    //EXAMPLE STRING : 'Web Development Tutorial'
    //EXPECTED OUTPUT : 'Development'

    // let inputString = prompt("Please enter string:");
    // let longestWord;

    //   function findWord(){
    //    let word = inputString.split(" ");

    //     for (let i = 0; i < word.length; i++) {
    //       let givenWord = word[i];
    //       if (givenWord.length > longestWord.length) {
    //         longestWord = givenWord;
    //     }
    // }
    // document.write(`<h3>The longest word in the given string ${inputString} is ${longestWord}</h3>`);
    // }
    //  findWord();

     //_______________ ********** _______________ *//


     ////13. The Geometrizer
    //Create 2 functions that calculate properties of a circle, using the definitions here.
    //Create a function called calcCircumference:
    //• Pass the radius to the function.
    //• Calculate the circumference based on the radius, and output "The circumference is NN".
    //Create a function called calcArea:
    //• Pass the radius to the function.
    //• Calculate the area based on the radius, and output "The area is NN".

 //  let radius = +prompt("Please enter the value of radius:");

 //   function calcCircumference(radius) {
 //    let circumference = 2 * 3.142 * radius;
 //    document.write(`<h3>Circumference of circle: ${circumference}</h3>`);
 //  }

 //   function calcArea(radius) {
 //    let area = 3.142 * (radius * radius);
 //    document.write(`<h3>Area of circle: ${area}</h3>`);
 //  }

 // calcCircumference(radius);
 // calcArea(radius);








  


  
  
