
/*

Create a simple HTML+JS application. The page will be empty, only include your JS file.
There are four accounts in our bank with numbers and balances as follows:

number: 000256784, balance: 790 euro,
number: 000986056, balance: 5 600 euro,
number: 001546238, balance: 78 065 euro,
number: 030987456, balance: 120 910 euro.
Save this information in appropriate variables in your program.

When the application starts, it asks the user for their account number and it outputs the balance on it.  */

/*const account1 = '000256784';
const account2 = '000986056';
const account3 = '001546238';
const account4 = '030987456';*/

//FINAL SOLUTION //

/*
const balance1 = 790;
const balance2 = 5600;
const balance3 = 78065;
const balance4 = 120910;

const demand = prompt('What is your account number ?');
const action = prompt('Choose an action');

let withdraw;


if (demand === '000256784' && action === 'balance'){
    document.write(balance1);
} else if (demand === '000986056' && action === 'balance'){
    document.write(balance2);
} else if (demand === '001546238' && action === 'balance'){
    document.write(balance3);
} else if (demand === '030987456' && action === 'balance'){
    document.write(balance4);
} else if (demand === '000256784' && action === 'withdraw'){
    withdraw = prompt ('Choose an amount to withdraw');
    document.write(balance1 - parseInt(withdraw));
} else if (demand === '000986056' && action === 'withdraw'){
    withdraw = prompt ('Choose an amount to withdraw');
    document.write(balance2 - parseInt(withdraw));
} else if (demand === '001546238' && action === 'withdraw'){
    withdraw = prompt ('Choose an amount to withdraw');
    document.write(balance3 - parseInt(withdraw));
} else if (demand === '030987456' && action === 'withdraw'){
    withdraw = prompt ('Choose an amount to withdraw');
    document.write(balance4 - parseInt(withdraw));
} else {
    document.write('Invalid account number!');
}
*/

/* 

Change your application so that after asking for the account number it asks the user for an action. If the action is "balance", output the balance on the account as before. If the action is something else, output "Unknown action."
Add another action to our application called "withdraw". If the user chooses this action, they will be asked to input an amount of money to withdraw from their account. When you have the information subtract the withdrawn money from the correct account. If the account does not have enough money output an error like "Not enough money on your account."   */



