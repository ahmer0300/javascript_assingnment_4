//JS Assignment 4 
//QUESTION # 01
//PART a
// var corr_pass = 'chilscene'
// PART b
// var user_pass = prompt("Enter Your Password Here : ")
// PART c
// if (user_pass === ""){
//     console.log("please enter a password");
// }
// else if (user_pass === corr_pass){
//     console.log("Correct! The password you entered matches the original password")
// }
// else{
//     console.log("Incorrect password")
// }


//QUESTION # 02
// var greeting;  
// var hour = 13;  
// if (hour < 18) {  
// greeting = "Good day";}  
// else {
// greeting = "Good evening";  
// }
// console.log(greeting);


//QUESTION # 03
// PART a
// var student_names=[];
// PART b
// var student_names = new Array();
// PART c
// var strings_array = ["usman", "Ahmed", "Ali","Asad"];
// PART d
// var numbers_array = [10, 20, 30, 40, 50];
// PART e
// var boolean_array = [true, false];
// PART f
// var mixed_array = ["usman", 10, false];
// PART g
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


//QUESTION # 04
// var colors = ["Red", "Green", "Blue","orange"];
// document.write("Colors in array are: " + colors + "<br>");
// PART a
// var colorAtStart = prompt("Enter the color you want to add to the beginning:");
// colors.unshift(colorAtStart);
// document.write("Array after adding color at the beginning: " + colors + "<br>");
// PART b
// var colorAtEnd = prompt("Enter the color you want to add at the end:");
// colors.push(colorAtEnd);
// document.write("Array after adding color at the end: " + colors+ "<br>");
// PART c
// colors.unshift("golden", "silver");
// document.write("Array after adding two more colors at the beginning: " + colors+ "<br>");
// PART d
// colors.shift();
// document.write("Array after deleting the first color: " + colors + "<br>");
// PART e
// colors.pop();
// document.write("Array after deleting the last color: " + colors + "<br>");
// PART f
// var index_no =+prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color you want to add at index " + index_no + ":");
// colors.splice(index_no, 0, colorToAdd);
// document.write("Array after adding color at index " + index_no + ": " + colors + "<br>");
// PART g
// var index_no_Del = +prompt("Enter the index from which you want to delete colors:");
// var ColorsToDel_num = +prompt("Enter the number of colors you want to delete:");
// colors.splice(index_no_Del, ColorsToDel_num);
// document.write("Array after deleting " +  ColorsToDel_num +  " colors from index " +index_no_Del + ": " + colors);


//QUESTION # 05
// var stdScores = [85, 72, 93, 65, 78];
// stdScores.sort(function(a, b) {
//     return a - b;});
// document.write("Sorted student scores are : " + stdScores);


//QUESTION # 06

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var selectMenu = "<select id='phoneSelect'>";
// for (var i = 0; i < phones.length; i++) {
//     selectMenu += "<option value='" + phones[i] + "'>" + phones[i] + "</option>";
// }
// selectMenu += "</select>";
// document.write(selectMenu);


//QUESTION # 07
// var Num = +prompt("Enter the number for multiplication table:");
// var Length = +prompt("Enter the length of the table:");
// document.write("Multiplication table of " + Num + ":<br>");
// for (var i = 1; i <= Length; i++) {
//     document.write(Num + " * " + i + " = " + (Num * i) + "<br>");
// }

//QUESTION # 08
// Counting: 1 to 15
// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br>");
// Reverse counting: 10 to 1
// document.write("Reverse counting: ");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br>");
// Even numbers: 0 to 20
// document.write("Even: ");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");
// Odd numbers: 1 to 19
// document.write("Odd: ");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");
// Series: 2k to 20k
// document.write("Series: ");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }


//QUESTION # 09
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Search for an item:");
// var found = false;
// for (var i = 0; i < items.length; i++) {
//     if (userInput.toLowerCase() === items[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     document.write("Yes, '" + userInput + "' is found in the list.");
// } else {
//     document.write("Sorry, '" + userInput + "' is not found in the list.");
// }


//QUESTION # 10,11
// var user = prompt("Enter a string:");
// var titleCaseString = user.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);});
// document.write("Input in title case: " + titleCaseString);


//QUESTION # 12
// var numberValue = +("472");
// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof(numberValue));