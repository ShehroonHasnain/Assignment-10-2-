// Loop Exersise: 
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
let i = 1;
let n = 10;
while (i <= n) {
    console.log(i);
    i++;
}

// 2. Write a js program to print all natural numbers in reverse(from n to 1). - using while loop
let n = 10;
let i = n;
while (i >= 1) {
    console.log(i);
    i--;
}

// 3. Write a js program to print all alphabets from a to z. - using while loop
let char = `a`;
while (char <= `z`) {
    console.log(char);
    char++;
}
let charCode = 97;
while (charCode <= 122) {
    console.log(String.fromCharCode(charCode));
    charCode++;
}

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
let i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);

    }
    i++;
}

// 5. Write a js program to print all odd number between 1 to 100.
let i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}

// 6. Write a js program to find sum of all natural numbers between 1 to n.
let i = 1;
let n = 10;
let sum = 0;
while (i <= n) {
    sum = sum + i;
    i++;
}
console.log("sum=" + sum);

// 7. Write a js program to find sum of all even numbers between 1 to n.
let i = 1;
let n = 10;
let sum = 0;
while (i <= n) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
    i++;
}
console.log("sum=" + sum);

// 8. Write a js program to find sum of all odd numbers between 1 to n.
let i = 1;
let n = 10;
let sum = 0;
while (i <= n) {
    if (i % 2 == 1) {
        sum = sum + i;
    }
    i++;
}
console.log("sum=" + sum);

// If-else exercise
// 1. Write a js program to find maximum between two numbers.
let a = 5;
let b = 3;
if (a > b) {
    console.log("Maximum number is a");

} else {
    console.log("Maximum number is b");
}

// 2. Write a js program to find maximum between three numbers.
let a = 2;
let b = 4;
let c = 7;
if (a > b) {
    if (a > c) {
        console.log("Maximum number is a");
    } else {
        console.log("Maximum number is c");
    }
} else if (b > c) {
    console.log("Maximum number is b");

} else {
    console.log("Maximum number is c");
}

// 3. Write a js program to check whether a number is negative, positive or zero.
var num = prompt("Enter your number.");
// let num=20;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var num = prompt("Enter your number");
if (num % 5 == 0 && num % 11 == 0) {
    console.log(`The number ${num} is divisible by both 5 and 11.`);
} else {
    console.log(`The number ${num} is not divisible by both 5 and 11.`);
}

// 5. Write a js program to check whether a number is even or odd.
var num = prompt("Enter your number");
if (num % 2 == 0) {
    console.log(`The number ${num} is even.`)
} else {
    console.log(`The number ${num} is odd.`)
}

// 6. Write a js program to check whether a year is leap year or not.
var year = prompt("Enter a year");
if (year % 4 == 0) {
    console.log(`${year} is a leap year.`)
} else {
    console.log(`${year} is not a leap year.`)
}

// 7. Writea js program to check whether a character is alphabet or not.
var char = prompt("Enter a character");
if (char >= 'a' && char <= 'z') {
    console.log(`${char} is alphabet`)
} else {
    console.log(`${char} is not an alphabet`)
}


// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
var char = prompt("Enter any alphabet");
if (char == 'a' || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log(`${char} is vowel`)
} else if (char >= 'a' && char <= `z`) {
    console.log(`${char} is a consonant`)
} else {
    console.log(`invalid character`);
}

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
var char = prompt("Enter a value");
if (char >= `a` && char <= `z`) {
    console.log(`${char} is an alphabet`);
} else if (char >= 1 && char <= 9) {
    console.log(`${char} is a digit`);
} else if (char == `@` || char == `#` || char == `$` || char == `&` || char == `!` || char == `%` || char == `*`) {
    console.log(`${char} is a special character`)
}

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
var char = prompt("Enter a value");
if (char >= 'A' && char <= 'Z') {
    console.log(`${char} is a uppercase alphabet`);

} else if (char >= `a` && char <= 'z') {
    console.log(`${char} is lowercase alphabet`);
} else {
    console.log('invalid value')
}

// 11. Write a js program to input week number and print week day.
var num = prompt("Enter week number");
var weekDays = num * 7;
console.log(`Total number of days in ${num} weeks are ${weekDays}`);
// -OR-
var num = prompt("Enter week numbre");
switch (num) {
    case `1`:
        console.log(`Sunday`);
        break;
    case `2`:
        console.log(`Monday`);
        break;
    case `3`:
        console.log(`Tuesday`);
        break;
    case `4`:
        console.log(`Wednesday`);
        break;
    case `5`:
        console.log(`Thursday`);
        break;
    case `6`:
        console.log(`Friday`);
        break;
    case `7`:
        console.log(`Saturday`);
        break;
    default:
        console.log(`invalid`);



}

// 12. Write a js program to input month number and print number of days in that month.
//( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
var num = prompt("Enter month number");
if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
    console.log(`month ${num} has 31 days`)
} else if (num == 4 || num == 6 || num == 9 || num == 11) {
    console.log(`month ${num} has 30 days`)

} else if (num == 2) {
    console.log(`month ${num} has 28 days`)
} else {
    console.log(`invalid value`)
}

// 13. Write a js program to count total number of notes in given amount.
// var amt = prompt("Enter your amount");
// var n500, n100, n50, n20, n10, n5, n2, n1;
// n500 = n100 = n50 = n20 = n10 = n5 = n2 = n1 = 0;
if (amt >= 500) {
    n500 = amt / 500;
    amt = amt - (n500 * 500);
}
if (amt >= 100) {
    n100 = amt / 100;
    amt = amt - (n100 * 100);
}
if (amt >= 50) {
    n50 = amt / 50;
    amt = amt - (n50 * 50);
}
if (amt >= 20) {
    n20 = amt / 20;
    amt = amt - (n20 * 20);
}
if (amt >= 10) {
    n10 = amt / 10;
    amt = amt - (n10 * 10);
}
if (amt >= 5) {
    n5 = amt / 5;
    amt = amt - (n5 * 5);
}
if (amt >= 2) {
    n2 = amt / 2;
    amt = amt - (n2 * 2);
}
if (amt >= 1) {
    n1 = amt;
}
console.log(`Total amount:${amt}`);
console.log(`500=${n500}`)
console.log(`100=${n100}`)
console.log(`50=${n50}`)
console.log(`20=${n20}`)
console.log(`10=${n10}`)
console.log(`5=${n5}`)
console.log(`2=${n2}`)
console.log(`1=${n1}`)

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
var strnum1 = prompt("Enter angle1:");
let num1 = Number(strnum1);
var strnum2 = prompt("Enter angle2:");
let num2 = Number(strnum2);
var strnum3 = prompt("Enter angle3:");
let num3 = Number(strnum3);
if (num1 > 0 && num2 > 0 && num3 > 0) {
    if (num1 + num2 + num3 == 180) {
        console.log("The triangle is valid.");
    } else {
        console.log("The triangle is not valid. The sum of angles is not equal to 180 degrees");
    }

} else {
    console.log(`The triangle is not valid. Each angle must be greater than 0 degrees.`);
}

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
var strside1 = prompt("Enter length of side 1:");
let side1 = Number(strside1);
var strside2 = prompt("ENter length of side 2:");
let side2 = Number(strside2);
var strside3 = prompt("ENter length of side 3:");
let side3 = Number(strside3);
if ((side1 + side2 > side3) &&
    (side1 + side3 > side2) &&
    (side2 + side3 > side1)) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid.");
}

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var strside1 = prompt("Enter length of side 1:");
let side1 = Number(strside1);
var strside2 = prompt("ENter length of side 2:");
let side2 = Number(strside2);
var strside3 = prompt("ENter length of side 3:");
let side3 = Number(strside3);
if ((side1 + side2 > side3) &&
    (side1 + side3 > side2) &&
    (side2 + side3 > side1)) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
} else {
    console.log("The given sides do not form a triangle");
}

// 17. Write a js program to find all roots of a quadratic equation.
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
let D = b * b - 4 * a * c;
if (D > 0) {
    r1 = (-b + Math.sqrt(D)) / (2 * a); r2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
}
else if (D == 0) {
    r1 = r2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
}
else
    console.log(`The Roots are Complex and Different `);

// 18. Write a js program to calculate profit or loss.
var sellingPrice = prompt("ENter sellingprice:");
var costPrice = prompt("Enter costprice:");
if (sellingPrice > costPrice) {
    var profit = sellingPrice - costPrice;
    console.log(`Profit: $${profit}`);
} else if (sellingPrice < costPrice) {
    var loss = costPrice - sellingPrice;
    console.log(`Loss: $${loss}`);
} else {
    console.log("No profit, no loss.");
}

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var strphy = prompt("Enter marks of Physics:");
let phy = Number(strphy);
var strchem = prompt("Enter marks of Chemistry:");
let chem = Number(strchem);
var strbio = prompt("Enter marks of Biology:");
let bio = Number(strbio);
var strmath = prompt("Enter marks of MAth");
let math = Number(strmath);
var strcomp = prompt("Enter marks of Computer:");
let comp = Number(strcomp);
var totalMarks = math + phy + chem + bio + comp;
var percentage = totalMarks / 500 * 100;
var grade = "A";
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}
console.log(`Percentage:${percentage}%`);
console.log(`Your grade is ${grade}`);


// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var strbasicSalary = prompt("Enter your basic salary:");
let basicSalary = Number(strbasicSalary);
if (basicSalary <= 10000) {
    hra = 0.20 * basicSalary;
    da = 0.80 * basicSalary;
} else if (basicSalary <= 20000) {
    hra = 0.25 * basicSalary;
    da = 0.90 * basicSalary;
} else {
    hra = 0.30 * basicSalary;
    da = 0.95 * basicSalary;
}
var grossSalaray = basicSalary + hra + da;
console.log(`Basic salary=${basicSalary}`);
console.log(`Gross salary=${grossSalaray}`);

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 200 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
var strunit = prompt("Enter number of units consumed:");
let unit = Number(strunit);
var bill = 0;
if (unit <= 50) {
    bill = unit * 0.50;
} else if (unit <= 100) {
    bill = (50 * 0.50) + ((unit - 50) * 0.75);
} else if (unit <= 200) {
    bill = (50 * 0.50) + (100 * 0.75) + ((unit - 150) * 1.20);
} else {
    bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((unit - 250) * 1.50);
}
console.log(`Number of unit consumed:${unit}`);
console.log(`Electricity bill:${bill}`);