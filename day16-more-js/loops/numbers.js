/* __________________ Listing numbers _____________________*/

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

/* Output the number of items in the array to the console. Answer: 19 */

const totalNb = (numbers) => {
    return numbers.length;
};

totalNb(numbers); //ok 

/* Output the number at the index 13 to the console. Answer: -10 */

const index = (numbers) => {
    return numbers[13];
};

index(numbers);

/* Output the number which is exactly in the middle of the array. Answer: -31 */

const middle = (numbers) => {
    return numbers[Math.floor(numbers.length / 2)];
};

middle(numbers);

/* Output every number in the array to the console. */

const displayAll = (numbers) => {
    for (const number of numbers){
        console.log(number);
    }
}

/*  Output the square of every number to the console. */

const displaySquare = (numbers) => {
    for (const number of numbers){
        console.log(number*number);
    }
};

/* Output only negative numbers from the array. */

const negative = (numbers) => {
    const negativeNumbs = [];
    for (const number of numbers){
        if (number < 0){
            negativeNumbs.push(number);
        }
    }
    return negativeNumbs;
};

/* Output an absolute value of every number in the array. */

const abs = (numbers) => {
    for (const number of numbers){
        console.log(Math.abs(number));
    }
};

/* Output only those numbers which absolute value id divisible by 3. */

const divThree = (numbers) => {
    for (const number of numbers){
        if (number % 3 === 0){
            console.log(number);
        }
    }
};

/*  Output only even (pair) numbers from the array. */

const even = (numbers) => {
    for (const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
};

/* For every number in the array output the difference between that number and number 5. */

const difFive = (numbers) => {
    for (const number of numbers){
        const difference = number-5;
        console.log(difference);
    }
};

/* For every number in the array output the squared difference of that number and number 5. */

const squaredDifFive = (numbers) =>{
    for (const number of numbers){
        const difference = number-5;
        console.log(difference*difference);
    }
};

/* Output all the numbers which are greater then their predecessor in the array. */

const predecessor = (numbers) =>{
    for(let i=0; i<numbers.length-1; i++){
        if(numbers[i] < numbers[i+1]){
            console.log(numbers[i+1]);
        }
    }
};

/*Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.  */

const peak = (numbers) => {
    for(let i=1; i<numbers.length-1; i++){
        if(numbers[i] > numbers[i+1] && numbers[i] > numbers[i-1]){
            console.log(numbers[i]);
        }
    }

};


/* ________________________ Counting _________________________ */

/* Count how many negative numbers are there in the array.*/

const countNeg = (numbers) => {
    return negative(numbers).length;
};

/* Compute the sum of all the numbers in the array. Answer: 70 */
 //NOT WORKING
const sumTootal = (numbers) => {
    const sum=0;
    for (const i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }

    return sum;
};



/*
Compute the average of the numbers in the array. Answer: 3.68421...
Compute the sum of all the positive numbers in the array.
First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...
Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897... */