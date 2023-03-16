// Esercizio 1 "Palidroma"
/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

function palindroma() {

    let parolaUtente = prompt('Inserisci la parola');
    
    let parolaReverse = invertiParola(parolaUtente);
    
    if (parolaReverse == parolaUtente) {
        alert('La parola è Palindroma')
    }
    else {
        alert('La parola non è Palindroma')
    }
}

function invertiParola(parola) {
    let reverse = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i]
    }
    return reverse;
    
}

// Esercizio 2 " Pari e dispari"
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

function gioca() {

    let pariDispari = prompt('Pari o Dispari ?');
    let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
    console.log(`Hai scelto ${pariDispari}.`, `Il tuo numero scelto è ${numeroUtente}`);

    function risultato(pariDispari, numeroUtente) {

        let randomComputerNumber = Math.floor(Math.random() * 5 + 1);
        console.log(`Il numero scelto dal computer è ${randomComputerNumber}`);
        let somma = numeroUtente + randomComputerNumber;
        console.log(`La somma è ${somma}`);

        if (somma % 2 == 0 && pariDispari == 'pari') {
            alert('Hai vinto');
        
        } else if (somma % 2 != 0 && pariDispari == 'dispari') {
            alert('Hai vinto');
            
        } else {
            alert('Hai Perso');
        }

    }

    risultato(pariDispari, numeroUtente);

}




