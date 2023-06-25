   // ********* CHAPTER 6-9 *********

 
 // //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
 //  let a = 10;
 //  document.write("Result" + "<br>");
 //  document.write("The value of a is: " + a + "<br>" + "..................................." + "<br><br>");

 //  let b = ++a;
 //  document.write("The value of ++a is: " +b + "<br>");
 //  document.write("Now the value of a is: " +b +"<br><br><br>");

 //  let c = a++;
 //  document.write("The value of a++ is: " +c + "<br>");
 //  document.write("Now the value of a is: " +c +"<br><br><br>");

 //  let d = --a;
 //  document.write("The value of --a is: " +d + "<br>");
 //  document.write("Now the value of a is: " +d +"<br><br><br>");

 //  let e = a--;
 //  document.write("The value of a-- is: " +e + "<br>");
 //  document.write("Now the value of a is: " +e +"<br><br><br>");

      //_______________ ********** _______________ *//


 //  //2. What will be the output in variables a, b & result after execution of the following script:
 //  var a = 2, b = 1;
 //  var result = --a - --b + ++b + b--;
 //  document.write(result);

  //  //Explain the output at each stage:
 //  //--a; postfix it means here output is a=1 subtract from (2-1)
 //  //--a - --b; here a=1 and b=0 then (1-0) output is 1
 //  //--a - --b + ++b; here a=1 and b=0 now add 1 in b so (1-0+1=2)
 //  //--a - --b + ++b + b--; here a=1 b=2 previos result add so the solution is (1-1+2+1=3) 

      //_______________ ********** _______________ *//


 // //3. Write a program that takes input a name from user & greet the user.
 // let userName = prompt("Please enter your name: " + "<br>");
 // document.write( userName + "<br>" + "Salam! May Allah Pak guide you! ");

      //_______________ ********** _______________ *//

 
 //5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
 //does not enter a new number, multiplication table of 5 should be displayed by default.
 //  let num = prompt("Please enter a number: ");
 //  if(num === "") {
 //  num = 5;
 //  }
 //  for(let i = 1; i <= 10; i++) {
 //  document.write(num + " X " + i + " = " + num * i + "<br>");
 //  }
 
      //_______________ ********** _______________ *//
 

  //    6. Take
 //a) Take three subjects name from user and store them in 3 different variables.
 //b) Total marks for each subject is 100, store it in another variable.
 //c) Take obtained marks for first subject from user and stored it in different variable.
 //d) Take obtained marks for remaining 2 subjects from user and store them in variables.
 //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
//  let subj1 = prompt("Please enter subject one: ");
//  let subj2 = prompt("Please enter subject two: ");
//  let subj3 = prompt("Please enter subject three: ");
//  let totalMarks = 100;
//  let allGainMarks = totalMarks*3;
//  let marks1 = +prompt("Please enter Marks for " + subj1);
//  let marks2 = +prompt("Please enter Marks for " + subj2);
//  let marks3 = +prompt("Please enter Marks for " + subj3);
//  let obtainMarks1 = marks1;
//  let obtainMarks2 = marks2;
//  let obtainMarks3 = marks3;
//  let totalobtainMarks = marks1 + marks2 + marks3;
//  let percentage1 = (obtainMarks1 / totalMarks) * 100;
//  let percentage2 = (obtainMarks2 / totalMarks) * 100;
//  let percentage3 = (obtainMarks3 / totalMarks) * 100;
//  let finalPercentage = (totalobtainMarks / allGainMarks) * 100;
//  document.write("Subject "+ "<br>" + subj1 + "<br>" + subj2 + "<br>" + subj3 + "<br>");
//  document.write("Total Marks" + "<br>" + totalMarks + "<br>" + totalMarks + "<br>" + totalMarks + "<br>" + totalMarks + "<br>" + 
//  allGainMarks+"<br>");
//  document.write("Obtain Marks" + "<br>"+ obtainMarks1 + "<br>" + obtainMarks2 + "<br>" + obtainMarks3 + "<br>" + 
//  totalobtain + "<br>");
//  document.write("Percentage" + "<br>" + percentage1 + "%" + "<br>" + percentage2 + "%" +"<br>" + percentage3 + "%" + "<br>" 
//  + finalPercentage + "%" + "<br>");







