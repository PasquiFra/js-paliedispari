console.log("JS OK");

// Funzione di reverse text 

let reversedText = [];

function reverseword (text) {
    for (let i = text.length - 1; i >= 0 ; i--) {
        reversedText += text [i];
    }
    console.log(reversedText)
}


// funzione del pari o dispari 

function isEven (result) {
    return result % 2 === 0;
}

// funzione di somma 

let result = 0;

console.log(result)


function sum (num1, num2) {
    
    result = num1 + num2;
    
    console.log(result)
    
    if (isEven(result)) {
        result = "true";
    } else {
        result = "false";
    }
    
    console.log(result)
}

