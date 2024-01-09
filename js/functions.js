console.log("JS OK");

// Funzione di reverse text 

let reversedText = [];

function reverseword (text) {
    for (let i = text.length - 1; i >= 0 ; i--) {
        reversedText += text [i];
    }
    console.log(reversedText)
}


