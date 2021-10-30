const quotes = ["The purpose of our lives is to be happy.", "Get busy living or get busy dying.", "If you want to live a happy life, tie it to a goal, not to people or things.", "In order to write about life first you must live it.", "Turn your wounds into wisdom.", "Life is really simple, but men insist on making it complicated."];


let randomQuote = document.getElementById("quote-body");
randomQuote.innerHTML = quotes[Math.floor(quotes.length * Math.random())];

let yellowBtn = document.getElementById("yellow");
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let greenBtn = document.getElementById("green");

yellowBtn.onclick = function () {
    randomQuote.style.backgroundColor = "yellow";
    randomQuote.style.border = "1px solid green"
    randomQuote.style.color = "black";
}
redBtn.onclick = function () {
    randomQuote.style.backgroundColor = "red";
    randomQuote.style.border = "1px solid yellow";
    randomQuote.style.color = "white";
}
blueBtn.onclick = function () {
    randomQuote.style.backgroundColor = "blue";
    randomQuote.style.border = "1px solid red";
    randomQuote.style.color = "white";
}
greenBtn.onclick = function () {
    randomQuote.style.backgroundColor = "green";
    randomQuote.style.border = "1px solid yellow"
    randomQuote.style.color = "white";
}


//hero converter



let dropdown = document.getElementById("converter").value;



function convert() {

    let dropdown = document.getElementById("converter").value;
    let textInput;
    let result;



    if (dropdown == 1) {
        textInput = document.getElementById("inputNum").value;
        result = textInput * (0.4536);
        textInput.innerText = " ";
    }
    else if (dropdown == 2) {
        textInput = document.getElementById("inputNum").value;
        result = textInput * (2.2046);
        textInput.innerText = " ";
    }

    document.getElementById("result").innerText = result;







}

// ==========================================================================================
//part 2


function inputseries() {


    let input_num = document.getElementById("input_num").value;

    var numbers = input_num.split(",");
    numbers = numbers.map(Number);
    console.log(numbers);


    //max and min

    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    // sum

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    //average
    let average = sum / numbers.length;

    //reverse

    let reverse = numbers.reverse();

    document.getElementById("max").innerText = Number(max);
    document.getElementById("min").innerText = Number(min);
    document.getElementById("sum").innerText = Number(sum);
    document.getElementById("average").innerText = Number(average);
    document.getElementById("reverse").innerText = reverse;

    input_num = " ";
}

