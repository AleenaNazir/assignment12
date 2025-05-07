// assignment1
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let input = prompt("Enter a number:");
let number = parseInt(input);
let result = isEven(number);
console.log("Is " + number + " even? " + result); 




// assignment2
function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
let input = prompt("Enter words separated by commas:");
let array = input.split(",");
let reversed = reverseArray(array);
console.log("Original array:", array);
console.log("Reversed array:", reversed); 



//assignment3
let quarter = parseInt(prompt("Enter quarter number (1-4):"));
switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
}



//assignment4
function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
        return "The shirt is your favorite color!";
    } else {
        return "That is a nice color.";
    }
}
let favoriteColor = prompt("Enter your favorite color:");
let shirtColor = prompt("Enter your shirt color:");
console.log(colorMessage(favoriteColor, shirtColor));



//assignment5
function lifePhase(age) {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}
let inputAge = parseInt(prompt("Enter your age:"));
console.log(lifePhase(inputAge));



//assignment6
function finalGrade(grade1, grade2, grade3) {
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        return 'Invalid grade.';
    }
    let average = (grade1 + grade2 + grade3) / 3;
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
let grade1 = prompt("Enter first grade (0-100):");
let grade2 = prompt("Enter second grade (0-100):");
let grade3 = prompt("Enter third grade (0-100):");
grade1 = Number(grade1);
grade2 = Number(grade2);
grade3 = Number(grade3);
console.log(finalGrade(grade1, grade2, grade3));


//assignment7
let age1 = parseInt(prompt("Enter age of student 1:"));
    let age2 = parseInt(prompt("Enter age of student 2:"));
    let age3 = parseInt(prompt("Enter age of student 3:"));
    let age4 = parseInt(prompt("Enter age of student 4:"));
    let age5 = parseInt(prompt("Enter age of student 5:"));
    let age6 = parseInt(prompt("Enter age of student 6:"));
    let age7 = parseInt(prompt("Enter age of student 7:"));
    let age8 = parseInt(prompt("Enter age of student 8:"));
    let age9 = parseInt(prompt("Enter age of student 9:"));
    let age10 = parseInt(prompt("Enter age of student 10:"));
    let totalAge = age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8 + age9 + age10;
    let averageAge = totalAge / 10;
    alert("The average age of the class is: " + averageAge);


//assignment8
let weight = prompt("Enter your weight in kilograms (kg): ");
    let height = prompt("Enter your height in meters (m): ");
    weight = parseFloat(weight);
    height = parseFloat(height);
    let bmi = weight / (height * height);
    alert("Your BMI is: " + bmi);



//assignment9
let height = prompt("Enter your height in inches:");
        let weight = prompt("Enter your weight in lbs:");
        height = Number(height);
        weight = Number(weight);
        let bmi = (weight * 703) / (height * height);
        let category = "";
        if (bmi < 16.0) {
            category = "Severely Underweight";
        } else if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25.0) {
            category = "Normal";
        } else if (bmi < 30.0) {
            category = "Overweight";
        } else if (bmi < 35.0) {
            category = "Moderately Obese";
        } else if (bmi < 40.0) {
            category = "Severely Obese";
        } else {
            category = "Morbidly Obese";
        }
        alert("Your BMI of " + bmi + " makes you " + category);


//assignment10
let firstNumber = prompt("Enter the first number:");
        firstNumber = parseFloat(firstNumber);
        let secondNumber = prompt("Enter the second number:");
        secondNumber = parseFloat(secondNumber);
        let sum = firstNumber + secondNumber;
        alert("The sum is: " + sum);
        let difference = firstNumber - secondNumber;
        let product = firstNumber * secondNumber;
        let quotient = firstNumber / secondNumber;
        alert(
            "Here are the results:\n" +
            "Sum: " + sum + "\n" +
            "Difference: " + difference + "\n" +
            "Product: " + product + "\n" +
            "Quotient: " + quotient
        );

//assignment11
let radius = prompt("Enter the radius of the circle:");
radius = parseFloat(radius);
let diameter = 2 * radius;
let circumference = 2 * 3.14159 * radius;
let area = 3.14159 * radius * radius;
console.log("Diameter of the circle: " + diameter);
console.log("Circumference of the circle: " + circumference);
console.log("Area of the circle: " + area);



//assignment12
let number = prompt("Enter a four-digit number:");
    alert("The digits are: " + number[3] + ", " + number[2] + ", " + number[1] + ", " + number[0]);


//assignment13
var age = prompt("Enter your age:");
    var maxAge = 90;
    var weeksInYear = 52;
    var yearsLeft = maxAge - age;
    var weeksLeft = yearsLeft * weeksInYear;
    alert("You have " + weeksLeft + " weeks left.");



//assignment14
price = 0;
      size = prompt("Pizza size? S, M, L");
      if (size == "S") {
        price = 15;
      } else if (size == "M") {
        price = 20;
      } else if (size == "L") {
        price = 25;
      }
      pepperoni = prompt("Add pepperoni? Y or N");
      if (pepperoni == "Y") {
        if (size == "S") {
          price = price + 2;
        } else {
          price = price + 3;
        }
      }
      cheese = prompt("Add extra cheese? Y or N");
      if (cheese == "Y") {
        price = price + 1;
      }
      alert("Thank you!\nTotal: $" + price);


//assgnment15
let age = prompt("Please enter your age:");
      age = Number(age);
      if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
      } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
      } else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
      } else {
        alert("Invalid input. Please enter a valid number.");
      }


//assignment16
let tweet = prompt("Enter your tweet:");
        let length = tweet.length;
        if (length <= 140) {
            alert("That " + length + " char tweet will work!");
        } else {
            let extra = length - 140;
            alert("Your " + length + " char tweet is " + extra + " chars too long");
        



//assignment17
alert("Welcome to our shop!");
let itemName = prompt("Enter the name of the item you are buying:");
let price = parseFloat(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity you are purchasing:"));
let subtotal = price * quantity;
console.log("You bought " + quantity + " " + itemName + "(s) at $" + price + " each.");
console.log("Your subtotal is: $" + subtotal);

