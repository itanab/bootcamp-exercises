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
    let peaks = [];
    for(let i=1; i<numbers.length-1; i++){
        if(numbers[i] > numbers[i+1] && numbers[i] > numbers[i-1]){
            peaks.push(numbers[i]);
        }
    }
    return peaks;

};


/* ________________________ Counting _________________________ */

/* Count how many negative numbers are there in the array.*/

const countNeg = (numbers) => {
    return negative(numbers).length;
};

/* Compute the sum of all the numbers in the array. Answer: 70 */
 //NOT WORKING
const sumTootal = (numbers) => {
    let sum=0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }

    return sum;
};

/*Compute the average of the numbers in the array. Answer: 3.68421... */
const avg = (numbers) => {
    const sum = sumTootal(numbers);
    const nbTotal = numbers.length;
    const avg = sum/nbTotal;
    return avg;
};

/* Compute the sum of all the positive numbers in the array.*/

const positivSum = (numbers) => {
    let sum = 0;
    for(const number of numbers){
        if(number > 0){
            sum+=number;
        }
    }
    return sum;
};


/* First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...*/





/*Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897... */



/*_______________________________ Searching___________________________________*/



/* Find the length of the longest ascending sequence of consecutive numbers in the array.*/
/*
const number =[2,1,5,9,8,9];


const ascending = (number) => {
    let length = 1;
    

    for (let i=0; i<number.length; i++){
        if(number[i] < number[i+1]){
            length++;
        }else{
            

        }

    }

    return length;

};
*/


/*Find the longest sequence of consecutive numbers which is either ascending or descending.*/




/*Find the biggest element in the array*/

const biggestElm = (numbers) => {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[numbers.length-1];
};

/* Find the second biggest element in the array. */

const secBiggestElm = (numbers) => {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[numbers.length-2];
};


/*Find the lowest peak and the ?????????????highest valley in the array.*/

const peakValley = (numbers) => {
    const peaks = peak(numbers);
    let lowestPeak = peaks[0];
    for (const peak of peaks){
        if(lowestPeak > peak){
            lowestPeak = peak;
        };
    };
    return lowestPeak;
};



/*___________________________- Transformation______________________ */


/*From the original array create a new array with a reversed order of the elements.*/

const reverse =(numbers) => {
    const reversed =[];
    for (let i=numbers.length-1; i>=0; i--){
        reversed.push(numbers[i]);
    }
    return reversed;
};


/* From the original array create a new array with the elements randomly shuffled. Use the Math.random method to help you with randomness. */




/*From the original array create a new array with the elements sorted from lowest to highest.*/

