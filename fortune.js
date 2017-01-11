// Fortune.js file
var quotes = ["Those who fail to train, train to fail",
"only those who wear shoes can walk", 
"Where did my dog go?", 
"Have you seen my grandson?", 
"Magic is only real to the believer",
"running can get you there faster, but you will miss the view",
"rain is great when you need water",
"Look out for that car!",
"Mom! Where is my SNACK PACK",
"Wait a second.... I think he's dead"];
//
/*
(function greatQuotes(array){
    return array[Math.floor(Math.random()*10)];
}(quotes));*/

function greatQuotes(array){
    return array[Math.floor(Math.random()*10)];
}

console.log(greatQuotes(quotes));