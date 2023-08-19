  
  // ********* CHAPTER 31-34 ********* 

  //// 1. Write a program that displays current date and time in your browser
 // let currentDate = new Date();
 // document.write("<h3>" + currentDate + "</h3>");

   //_______________ ********** _______________ *//


  ////2. Write a program that alerts the current month in words. For example December.

 // let month = new Date().getMonth();
 // let monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 //  for(let i = 0; i < monthNames.length; i++){
 //    if(i === month){
 //      document.write("<h3>" + "Current Month: " + monthNames[i] + "</h3>");
 //      break;
 //     }
 //  }

   //_______________ ********** _______________ *//


  ////3. Write a program that alerts the first 3 letters of the current day,for example if today is Sunday then alert will show Sun.
  
 // let day = new Date().getDay();
 // let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 //  for(let i = 0; i < dayNames.length; i++){
 //    if(i === day){
 //      document.write("<h3>" + "Today is " + dayNames[i] + "</h3>");
 //      break;
 //     }
 //  }

   //_______________ ********** _______________ *//


  ////4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

 // let day = new Date().getDay();
 //  if(day === 0 || day === 6){
 //    document.write("<h3>" + "Yahoo! It's Fun Day 😍" + "</h3>");
 //    }
 //  else{
 //     document.write("<h3>" + "Ah! It's Working Day🙁" + "</h3>");
 //    }

    //_______________ ********** _______________ *//


   ////5. Write a program that shows the message “First fifteen days of the month”
   // if the date is less than 16th of the month else shows “Last days of the month”.

 // let date = new Date().getDate();
 //  document.write("<b>" + date + "</b>");
 //    if(date < 16){
 //      document.write("<h3>" + "First fifteen days of the month");
 //     }
 //     else{
 //       document.write("<h3>" + "Last days of the month" + "</h3>");
 //     }

   //_______________ ********** _______________ *//


  ////6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
  //hasn't been declared beforehand. Use any variable you like to represent the Date object.

 // let time = new Date();
 // document.write("<h3>" + "Current Date:" + time + "</h3>");
 //  let milliSecs = time.getTime() / 1000;
 //  let minutes = time.getTime() / (1000 * 60);
 //  document.write("<h3>" +  "Elapsed milliseconds since January 1,1970: " + milliSecs + "</h3>");
 //  document.write("<h3>" + "Elapsed minutes since January 1,1970: " + minutes + "</h3>");

   //_______________ ********** _______________ *//


  ////7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

 // let hoursTime = new Date().getHours();
 // if(hoursTime > 0 && hoursTime < 12){
 //   alert("It's AM");
 // }
 // else{
 //   alert("It's PM");
 // }

   //_______________ ********** _______________ *//


  ////8. Write a program that creates a Date object for the last day of the last month of 2020
  // and assigns it to variable named laterDate.

 // let laterDate = new Date("Dec 31,2020");
 // document.write("<h3>" + "Later date: " + laterDate + "</h3>");

   //_______________ ********** _______________ *//


  ////9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
  // Note: 1st Ramadan was on June 18, 2015

 // let currentDate = new Date("June 18, 2015");
 //  currentDate = currentDate.getTime() / (1000 * 60 * 60 * 24);
 //  currentDate = Math.floor(currentDate);
 //   alert(currentDate + " " + "days have passed since 1st Ramadan, 2015");

   //_______________ ********** _______________ *//


   ////10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

 // let refDate = new Date("January 1, 2015");
 // let curDate = refDate.getTime() / 1000;
 //  document.write("On reference date" + refDate + curDate + " " + "seconds had passed since the beginning of 2015");

   //_______________ ********** _______________ *//


   ////11. Create a Date object for the current date and time. 
  //Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
 // let todayDate = new Date();
 // let hours = todayDate.getHours();
 //  todayDate.setHours(hours -1);
 //   document.write("Current Date: " + new Date() + "<br>" + "1 hour ago, it was " + todayDate);

   //_______________ ********** _______________ *//


   ////12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

 // let currentDate = new Date();
 // let years= currentDate.getFullYear ();
 //  currentDate.setFullYear(years -100);
 //   document.write("Current Date: " + new Date() + "<br>" + "100 years back, it was " + currentDate);
  
   //_______________ ********** _______________ *//

   ////13. Write a program to ask the user about his age. Calculate and show his birth year in your browser

 // let userAge = +prompt("Please enter your age: ");
 // let year = new Date().getFullYear() - userAge;
 //  document.write("<h3>" + "Your age is " + userAge + "</h3>");
 //  document.write("<h3>" + "Your birth year is " + year + "</h3>");

   //_______________ ********** _______________ *//


   ////14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
  //a. Customer Name
  //b. Current Month
  //c. Number of units
  //d. Charges per unit
  //e. Net Amount Payable (within Due Date)
  //f. Late Payment Surcharge
  //g. Gross Amount Payable (after Due Date)

 // let userName = prompt("Please enter your name: ");
 // let billMonth = prompt("Please enter bill of month: ");
 // let noUnits = +prompt("Please enter number of units: ");
 // let chargesPerUnit = 16;
 // let netAmount = noUnits * chargesPerUnit;
 // let latePaySurcharge = 350;
 // let grossAmount = netAmount * latePaySurcharge;

 //   document.write("<h1>" + "K-Electric Bill" + "</h1>");
 //   document.write("Customer Name: " +"<b>" + userName + "</b><br>");
 //   document.write("Month: " +"<b>" + billMonth + "</b><br>");
 //   document.write("Number of units: " + "<b>" + noUnits + "</b><br>");
 //   document.write("Charges per unit: " + "<b>" + chargesPerUnit  + "</b><br><br>");
 //   document.write("Net Amount Payable(within Due Date): " + "<b>" + netAmount + "</b><br>");
 //   document.write("Late payment surcharge: " + "<b>" + latePaySurcharge + "</b><br>");
 //   document.write("Gross Amount Payable(after Due Date): " + "<b>" + grossAmount + "</b><br>");
