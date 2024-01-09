console.log("JS OK");

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
    inputText = textField.value.trim().toLowerCase();
    console.log (inputText);

    //validazione del testo
    if (!inputText) return alert("Inserisci del testo valido!"); 
    if (inputText.includes(" ")) return alert("Non sono ammessi spazi"); 
    
    //! Imposto la funzione per capire se la parola inserita è palidroma

    // 1) funzione di inversione dell'input
    reverseword (inputText)

    // 2) confronto il risultato con il suo inverso
    let isPalindrome = `${textField.value} Is palindrome!`;
    let isNotPalindrome = `${textField.value} Is a normal word`;

    if (reversedText === inputText){
        return inputResult.innerHTML = `<strong> ${isPalindrome} </strong>`;
    } else {
        return inputResult.innerHTML = `<strong> ${isNotPalindrome} </strong>`;
    }
})

//! gioco del pari o dispari

const pairUnpair = document.getElementById("pair-unpair");
const yourNumber = document.getElementById("your-number");
const button = document.getElementById("send");

const pcResult = document.getElementById("pc-result");
const gameResult = document.getElementById("game-result");
const feedback = document.getElementById("feedback");

button.addEventListener ("click", function() {

    
    let userChoice = pairUnpair.value;
    let userNumber = parseInt (yourNumber.value.trim());
    
    console.log(userChoice, userNumber);
    
    if ( isNaN(userNumber) || userNumber <= 0 || userNumber > 5 ) {
        
        return alert("Hai inserito un valore non valido!");
     
    }
    

    const randomNum = Math.floor((Math.random() * 5 + 1));
    
    console.log(randomNum);
    
    sum(userNumber, randomNum);
    
    console.log(result);
    
    if ( result === userChoice ) {
        gameResult.innerText = `Il Numero del PC è: ${randomNum} Hai vinto!`;
        feedback.classList.remove("d-none");
        
    } else {
        
        gameResult.innerText = `Il Numero del PC è: ${randomNum} Hai perso!`;
        feedback.classList.remove("d-none");
        
    }
    
})