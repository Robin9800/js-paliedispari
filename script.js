/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


//Chiedi all'utente di inserire una parola
let word = prompt('Inserisci una parola');



/*Finchè il valore non è una parola oppure la lunghezza è uguale a 0 richiedi di inserire la parola.*/
while(!word || word.length === 0){
    word = prompt('Inserisci una parola');
}

//Inverti la parola
const invertedWord = invertWord(word);
console.log(invertedWord);

/*Crea una funzione per capire se la parola inserita è palindroma*/
if(word===invertedWord){
    console.log('è palindroma');
}else{
        console.log('non è palindroma');
}

//Creo un ciclo che va da 0 alla lunghezza in caratteri della stringa
function invertWord(parola){
    let inverted= '';

    for(let i = 0; i < parola.length; i++){
        //Recupero il carattere all'interno della stringa alla posizione i
        const char = parola.charAt(i);
        inverted = char + inverted;
    }
    
    return inverted;
}

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let pariODispari = prompt('pari o dispari?');

/*Finchè l'utente non inserisce effettivamente qualcosa e finchè ciò che viene inseirito
non è uguale a "pari" o "dispari" chiedi all'utente di inserire qualcosa*/

while(!pariODispari || (pariODispari !== 'pari' % pariODispari !== 'dispari')){
    pariODispari = prompt('pari o dispari?');
}