console.log("JS OK");

let reversedText = [];

function reverseword (text) {
    for (let i = text.length - 1; i >= 0 ; i--) {
        reversedText += text [i];
    }
    console.log(reversedText)
}


//! imposto l'azione del bottone submit ed impedisco il comportamento di default

const textField = document.getElementById("text-field");
const form = document.querySelector("form");
let inputResult = document.getElementById("input-result");


form.addEventListener ("submit", function(event) {
    
    //svuoto il campo  ad ogni click
    reversedText = [];
    console.log(reversedText)

    //impedisco il comportamento di default del submit
    event.preventDefault();

    // definisco la variabile relativa al valore inserito
    inputText = textField.value.trim();
    console.log (inputText);

    //validazione del testo
    if (!inputText) return alert("Inserisci del testo valido!"); 
    if (inputText.includes(" ")) return alert("Non sono ammessi spazi"); 
    
    //! Imposto la funzione per capire se la parola inserita è palidroma

    // 1) funzione di inversione dell'input
    reverseword (inputText)

    // 2) confronto il risultato con il suo inverso
    let isPalindrome = `${inputText} Is palindrome!`;
    let isNotPalindrome = `${inputText} Is a normal word`;

    if (reversedText === inputText){
        return inputResult.innerHTML = `<strong> ${isPalindrome} </strong>`;
    } else {
        return inputResult.innerHTML = `<strong> ${isNotPalindrome} </strong>`;
    }
})