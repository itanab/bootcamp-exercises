// ___________ BASIC ALGO EXERCISES IN JS _____________ //


// ✽ Write a function called len which returns the length of an array.

const array = [5, 4, 3, 6, 7];


//algorithmic approach

const len = (array) => {
    let counter=0;
    for (const nbs of array){
        counter++;
    }
    return counter;
};

//but also - with js function

const len2 =(array) => {
    return array.length;
}


// ✽ Write a function called last which returns last element of an array. Return null when the array is empty.

const last = (array) => {
    if(array.length > 0){
        return array[array.length-1];
    }else return null;
}


// ✽ Write a function called butlast which returns last but on element of an array. Return null when the array has less then two elements.

const butlast = (array) => {
    if(array.length > 2){
        return array[array.length-2];
    } return null;
}


// ✽ Write a function called elementAt which returns k-th element of an array. The first element in the array is number 1. Return null if k is out of bounds.

const elementAt = (array, k) => {
    if(array.length >= k){
        return array[k-1];
    }else return null;
}

// ✽✽ Write a function called reverse which returns a reversed copy of an array. The original array must stay the same.

const reverse2 = (array) => {
    let arrayRev = [];
    
    for(let i= array.length-1; i>=0; i--){
        arrayRev.push(array[i]);
    }
    //console.log(array);
    return arrayRev;
    
   
}

//const reversed = reverse2(array);

//✽✽ Write a function called isPalindrome which checks whether an array of numbers is a palindrome. Palindrome is a sequence which from start reads the same as from the end, e.g. 'level', 'racecar' or 'madam'

// helper funct

const match = (array1, array2) => {
    if(array1 == array2){
        return true;
    }else return false;
} 
// !!!!!!!!!!!impo missing smth not returnin true but returning correct arrays

const isPalindrome = (array) => {
    const array2 = reverse2(array);
    //console.log(array2);
    if(array1 === array2){
        return 'it is a palindrom';
    }else return 'is not a palindrom';
}

// ✽✽ Write a function called compress which eliminates consecutive duplicates an array of numbers. The function will create a new array where every repeated elements is replaced with a single copy of the element. The original array must stay the same.


// !! NOT WORKINGG 

const compress = (array) => {
    let compressed =[];
    
    for(let nbs of array){
        //console.log(nbs);
        if (!(nbs in compressed)) {
            //console.log(compressed);
            compressed.push(nbs);
        }
    }
    return compressed;
}


