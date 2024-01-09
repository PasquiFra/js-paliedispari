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


function sum (num1, num2) {
    
    if ( isNaN(num1, num2) || num1 <= 0 ||  num2 <= 0 || num1 > 5 ||  num2 > 5 ) {
        return alert("Hai inserito un valore non valido!");
    }
    
    result = num1 + num2;
    
}