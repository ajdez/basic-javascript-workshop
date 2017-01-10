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


// function that takes 2 numbers and str stating what type of operation to complete

function operator(numOne, numTwo, str){
    if(str ==="add"){
        return numOne + numTwo;
    }
    else if (str === "subtract"){
        return numOne - numTwo;
    }
    else if (str === "mult"){
        return numOne * numTwo;
    }
    else if (str === "div"){
        return numOne / numTwo
    }
    else{
        return 0;
    }
}

console.log(operator(5, 2, "add"));
console.log(operator(5, 2, "subtract"));
console.log(operator(5, 2, "mult"));
console.log(operator(5, 2, "div"));
console.log(operator(5, 2, "Hola Senior"));


//function that take string and number and repeat string the inputed amount of times

function repeat (str, num){
    var string = "";
    for(var i = 0; i < num; i++){
        string += str;
    }
    return string;
}

console.log(repeat("hello", 3));
console.log(repeat("Johny", 5));
console.log(repeat("wow", 10));


//Function that prints numbers 1 to 10

function oneToTen(){
    for(var i = 1; i <= 10; i++){
        console.log(i);
    }
}

oneToTen();


// function that prints out numbers 1 to 10 but in words (one, two, three...)

function oneToTenString (){
    for (var i = 1; i <= 10; i++){
        switch(i){
            case 1:
                console.log("one");
                break;
            case 2:
                console.log("two");
                break;
            case 3:
                console.log("three");
                break;
            case 4:
                console.log("four");
                break;
            case 5:
                console.log("five");
                break;
            case 6:
                console.log("six");
                break;
            case 7:
                console.log("seven");
                break;
            case 8:
                console.log("eight");
                break;
            case 9:
                console.log("nine");
                break;
            case 10:
                console.log("ten");
                break;
        }
    }
}

oneToTenString();


//Prints numbers 1 to 10 by their own value

function numberPrint (){
    for(var i = 1; i<= 10; i++){
        for(var j = 0; j < i; j++){
            console.log(i);
        }
    }
}

numberPrint();

// function that return the reverse of the string entered

function reverseStr(str){
    var newStr = str.split("").reverse().join('');
    return newStr;
}

console.log(reverseStr("Anthony"));
console.log(reverseStr("Hello Friends"));
console.log(reverseStr(""));


// function that  return the factoral

function factorial (num){
    if (num < 0){
        return "not applicable";
    }
    else if (num === 0){
        return 1;
    }
    else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(-10));
console.log(factorial(0));


// takes phrase string and return the longest word
function longestWord(str){
    var sentence = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < sentence.length; i++){
        if (longestWord.length < sentence[i].length){
            longestWord = sentence[i];
        }
    }
    return longestWord;
}

console.log(longestWord("Look at all the little kittens"));
console.log(longestWord("If only I could dance, I would always be dancing"));
console.log(longestWord("Look at all the little dogs"));


// Capitalized all letters in str

function helloWorld(str){
    if ((/[A-Z]/.test(str)) == false){
        return str.toUpperCase();
    }
    else if ((/[A-Z]/.test(str)) == true){
        var list = [];
        var string = str.toLowerCase();
        var array = string.split(" ");
        for (var i = 0; i < array.length; i++){
            list.push(array[i][0].toUpperCase() + array[i].substring(1,array[i].length));
        }
        return list.join(' ');
    }
}

console.log(helloWorld("Hello World"));
console.log(helloWorld("hello world"));
console.log(helloWorld("like So many others"));


// function that returns the largest number in the array

function largestNum (arr){
    var large = 0;
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] > large){
            large = arr[i];
        }
    }
    return large;
}

console.log(largestNum([2, 3, 4]));
console.log(largestNum([8, 3, 20]));
console.log(largestNum([2, 30, 4]));


// Function that checks for truthy values

function truthy (array){
    return array.filter(function(array){return !!array;})
}
var arr = [3, 4, "", 0, 85, null];
console.log(truthy(arr));
