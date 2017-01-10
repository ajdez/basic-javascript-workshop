//This is a comment


//Function that return first letter of string

function firstLetter(str){
    return str.substring(0,1);
}

console.log(firstLetter("Anthony"));
console.log(firstLetter("Ziad"));
console.log("");


//Function that return last character of string

function lastLetter(str){
    return str.slice(-1);
}

console.log(lastLetter("Anthony"));
console.log(lastLetter("Ziad"));
console.log(lastLetter(""));


//Function that takes String and Number and return character at that numbers position

function numStringPosition(str, num){
    return str.substring(num, num + 1);
}

console.log(numStringPosition("Anthony", 3));
console.log(numStringPosition("Ziad", 1));
console.log(numStringPosition("", 5));


//Function that adds 2 numbers together

function add(a, b){
    return a + b;
}

console.log(add(2, 4));
console.log(add(5, 7));
console.log(add("Hi", 5));  //When you input a string, it turn the entire result as string. So if you inputed "hi" and 5, you will get "hi5"


// Function that takes two numbers and multiplies them

function multiply (a, b){
    return a * b;
}

console.log(multiply(2, 4));
console.log(multiply(5, 10));
console.log(multiply("Hi", 4)); //Return "NAN" which means not a number




