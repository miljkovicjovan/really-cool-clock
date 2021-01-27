var today = new Date();
var years = today.getFullYear();
var months = today.getMonth();
var days = today.getDate();
var day = today.getDay();

var endOfDay;

//set the getMonth output to the months variable
if (months == 0){months = "January"};
if (months == 1){months = "February"};
if (months == 2){months = "March"};
if (months == 3){months = "April"};
if (months == 4){months = "May"};
if (months == 5){months = "June"};
if (months == 6){months = "July"};
if (months == 7){months = "August"};
if (months == 8){months = "September"};
if (months == 9){months = "October"};
if (months == 10){months = "November"};
if (months == 11){months = "December"};

//set the getDay output to the day variable
if (day == 0){day = "Sunday"};
if (day == 1){day = "Monday"};
if (day == 2){day = "Tuesday"};
if (day == 3){day = "Wendesday"};
if (day == 4){day = "Thursday"};
if (day == 5){day = "Friday"};
if (day == 6){day = "Saturday"};

//set st nd or th at the end of the days variable
if (days == 1){endOfDay = "st"};
if (days == 2){endOfDay = "nd"};
if (days == 3){endOfDay = "rd"};
if (days == 21){endOfDay = "st"};
if (days == 22){endOfDay = "nd"};
if (days == 23){endOfDay = "rd"};
if (days == 31){endOfDay = "st"};
if (days > 3 || days < 21 || days > 23){endOfDay = "th"};
days += endOfDay;//setting it to the days variable

document.getElementById("print-date").innerHTML = day + ", " + months + " " + days + ", " + years;