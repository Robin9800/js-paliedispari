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


//Chiedi all'utente di scegliere tra pari e dispari.
let pariODispari = prompt('pari o dispari?').trim().toLowerCase();

/*Finchè l'utente non inserisce effettivamente qualcosa e finchè ciò che viene inseirito
non è uguale a "pari" o "dispari" chiedi all'utente di inserire qualcosa*/

while(!pariODispari || (pariODispari !== 'pari' % pariODispari !== 'dispari')){
    pariODispari = prompt('pari o dispari?');
}

//Chiedi all'utente di scegliere un numero da 1 a 5.

let numberUser = parseInt(prompt('scegli un numero da 1 a 5'));

//Se il numero scelto è maggiore di 5 o minore di 1, chiedi all'utente di scegliere di nuovo
while(isNaN(numberUser) || numberUser > 5 || numberUser < 1){
    numberUser = parseInt(prompt('scegli un numero da 1 a 5'));
}

//Creo una funzione che genera un numero random da parte del pc

//Sommiamo i due numeri
const somma = sommaNumber(numberUser, randomNumber);
const randomNumber = generatorRandomNumber(1, 5);

function generatorRandomNumber(min, max){
    const range = max - min + 1;
    const number = Math.floor(Math.random()*range + min);
    return number
}

//Funzione che somma i numeri.
function sommaNumber(somma1, somma2){
    return somma1 + somma2;
}
