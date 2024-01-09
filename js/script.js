console.log("JS OK");


//! imposto l'azione del bottone submit ed impedisco il comportamento di default

const textField = document.getElementById("text-field");
const form = document.querySelector("form");
const inputResult = document.getElementById("input-result");

form.addEventListener ("submit", function(event) {

    event.preventDefault();

    const inputText = textField.value.trim();

    //validazione
    if (!inputText) return alert("Inserisci del testo valido!"); 
    


    inputResult.innerHTML = `<strong> ${inputText} </strong>`;

})