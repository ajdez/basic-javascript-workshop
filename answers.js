//This is a comment


//Function that return first letter of string

function firstLetter(str){
    return str.substring(0,1);
}

firstLetter("Anthony");
firstLetter("Ziad");
firstLetter("");


//Function that return last character of string

function lastLetter(str){
    return str.slice(-1);
}

lastLetter("Anthony");
lastLetter("Ziad");
lastLetter("");


//Function that takes String and Number and return character at that numbers position

function numStringPosition(str, num){
    return str.substring(num, num + 1);
}