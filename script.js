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