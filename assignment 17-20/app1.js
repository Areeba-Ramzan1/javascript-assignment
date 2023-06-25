   
   // ********* CHAPTER 17-20 *********


  //// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
  // let multiArray = [[] , []];
   
   //_______________ ********** _______________ *//


  ////2. Declare and initialize a multidimensional array representing the following matrix:
  // let multidimenArray = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];

   //_______________ ********** _______________ *//


  ////3. Write a program to print numeric counting from 1 to 10.
 //   for(let i=1 ; i <= 10 ; i++) {
 //    document.write(i + "<br>");
 //   }

   //_______________ ********** _______________ *//


  //// 4. Write a program to print multiplication table of any number using for loop.Table number & length should be taken as an input from user.
 //   let num = +prompt("Please enter any number:");
 //   let numLength = +prompt("Please enter the length of Multiplication table:");
 //   document.write("<h2> MUltiplication table of </h2>" + num + "<br>");
 //   document.write("<h2> Length: </h2>" + numLength + "<br><br>");  
 //   for(let i = num ; i <= num ; i++){
 //    for(let j = 1 ; j <= numLength ; j++){
 //       document.write(i + "x" + j + "=" +(i*j) + "<br>");
 //    }
 //   }

   //_______________ ********** _______________ *//


 ////5. Write a program to print items of the following array using for loop:
  //fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
 //   let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
 //    for (var i = 0; i <= fruits.length - 1; i++) {
 //      document.write(fruits[i] + "<br>") ;
 //    }
 //    document.write("<br><br><br>");
 //    for (let j = 0; j <= fruits.length - 1; j++) {
 //     document.write("Element at Index " + j + " is " + fruits[j] + "<br>");
 //    }

   //_______________ ********** _______________ *//


  //// 6. Generate the following series in your browser. See example output.
 //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
 //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
 //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

    //_______________ a. _______________ *//

   // document.write("<h2> Counting: </h2>");
   // for( let i = 1 ; i <= 15 ; i++){
   //    document.write(i + ",");
   // }

   //  //_______________ b. _______________ *//

   //  document.write("<h2> Reverse Counting: </h2>");
   // for( let i = 10 ; i >= 1 ; i--){
   //    document.write(i + ",");
   // }

   //    //_______________ c. _______________ *//

   // document.write("<h2> Even: </h2>");
   // for( let i = 0 ; i <= 20 ; i++){
   //    if(i % 2 == 0){
   //   document.write(i + ",");
   //    }
   // }

   //    //_______________ d. _______________ *//

   // document.write("<h2> Odd: </h2>");
   // for( let i = 0 ; i <= 20 ; i++){
   //    if(i % 2 !== 0){
   //   document.write(i + ",");
   //    }
   // }

   //    //_______________ e. _______________ *//

   // document.write("<h2>Even: </h2>");
   // for( let i = 1 ; i <= 20 ; i++){
   //    if(i % 2 === 0){
   //   document.write(i + "k,");
   //    }
   // }

   //_______________ ********** _______________ *//


   ////7. You have an array
  //A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
 //After searching, prompt the user whether the given item is found in the list or not.
  //   let menu = ["cake", "apple pie", "cookie", "chips", "patties"];
  //   let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
 
  //  for (var i = 0; i < menu.length; i++) {
  //      if (userInput == menu[i]) {
  //          flag = "<b>available</b>";
  //      }
  //  }
 
  //  if (flag == "<b>available</b>") {
  //      document.write(userInput + " is " + flag + " at index " + menu.indexOf(userInput) + " in our bakery.");
  //  }
 
  //  else {
  //      document.write("We are sorry. " + userInput + " is <b>not available.</b> in our bakery");
  //  } 

   //_______________ ********** _______________ *//


 //// 8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].
  // let arr = [24, 53, 78, 91, 12];
  // let largestArray = arr[0];
 
  // for (var i = 0; i < arr.length; i++) {
  //  if (arr[i] > largestArray) {
  //   largestArray = arr[i];
  //    }
  // }
  // document.write("<h2> Array items: </h2> " + arr + "<br>");
  // document.write("<h2> The largest number is: </h2> " + largestArray);

  //_______________ ********** _______________ *//


 //// 9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]
 //  let arr = [24, 53, 78, 91, 12];
 //  let smallestArray = arr[0];

 //  for (var i = 0; i < arr.length; i++) {
 //   if (arr[i] < smallestArray) {
 //    smallestArray = arr[i];
 //     }
 //  }
 //  document.write("<h2> Array items: </h2> " + arr + "<br>");
 //  document.write("<h2> The smallest number is: </h2> " + smallestArray);

  //_______________ ********** _______________ *//


  ////10. Write a program to print multiples of 5 ranging 1 to 100.

  // for (let i=5; i<=5; i++){
  //   for(let j=1; j<=20; j++){
  //   document.write(i*j + ", ")
  //   }
  //    }
