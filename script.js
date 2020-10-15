console.log("See the original solutions in the js file commented");

/*function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

isEven(2);*/

// solution from the video
/*
function isEven(num) {
    return num % 2 === 0;
}

isEven(2);
*/

//----------------------------------------------------
/*
function factorial(num2) {
    if (num2 < 0) {
        return 'Has no factorial';
    }
    if (num2 === 0) {
        return 1;
    }
    for (let i = num2 - 1; i >= 1; i--) {
        num2 *= i;
    }
    return num2;
}

factorial(5);
*/

//solution from the video

/*
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
}

factorial(5);
*/

/*
function factorial(num) {
    let result = num;
    for (let i = num-1; i >= 1; i--) {
        result *= i;
    }
}

factorial(5);
*/

//----------------------------------------------------

/*
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

kebabToSnake("just-testing-if-it-works");
*/

// .replace() doesn't change the original str => new var. in the func. if I want to store it


const num = prompt("Give a number!");
const num2 = prompt("Give another number!");
const str = prompt("Write-few-words-like-this! (Kebab-style)");

const isEven = function(num) {
    if(num % 2 === 0) {
        return `The 1st number you gave (${num}) is even.`;
    }
    return `The 1st number you gave (${num}) is odd.`;
}

function factorial(num2) {
    if (num2 < 0) {
        return 'The 2nd number you gave has no factorial';
    }
    if (num2 === 0) {
        return 'The 2nd number\'s factorial is 1';
    }
    for (let i = num2 - 1; i >= 1; i--) {
        num2 *= i;
    }
    return `The 2nd number\'s factorial is ${num2}`;
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_") + ' (Your_kebab_in_snake_style)';
}


alert(isEven(num));
alert(factorial(num2));
alert(kebabToSnake(str));