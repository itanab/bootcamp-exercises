//OWN FUNCTIONS TASKS 


// TASK 1 -Mathematical functions

/*
Write a function square which takes a number as an input and return the square of that number.
Write a function called hypotenuse which takes two numbers a and b and return the square root of a2 + b2. Use the Math.sqrt function to compute the square root and use your square function to compute the squares.
exercise*/

const square = (a) => a*a;
const hypotenuse = (a,b) => Math.sqrt(square(a) + square(b));



// TASK 2 - Salary function

/*
Turn your salary computing formula to a function called salary. The function will have three parameters: pay, hours and days and will return the resulting salary. Call that function with some real arguments to test that it works.
Create another function called taxed_salary(), which will take two parameters - the basic salary and the tax. Let it return a salary after applying the tax.*/

const salary = (pay, hours, days) => pay * hours * days;
const taxedSalary = (salary, tax) => salary * tax;
