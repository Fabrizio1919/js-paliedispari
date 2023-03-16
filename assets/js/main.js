// Esercizio 1 "Palidroma"
/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

function palindroma() {

    let parolaUtente = prompt('Inserisci la parola');
    let parolaReverse = '';


    function risultato(parolaUtente, parolaReverse) {

        for (let i = parolaUtente.length - 1; i >= 0; i--) {
            parolaReverse += parolaUtente[i]
        }
        if (parolaReverse == parolaUtente) {
            alert('La parola è Palindroma')
        }
        else {
            alert('La parola non è Palindroma')
        }
    }
    risultato(parolaUtente, parolaReverse);
   
}


// Esercizio 2 " Pari e dispari"
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


