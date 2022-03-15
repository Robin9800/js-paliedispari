/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

let word = prompt('Inserisci una parola');

/*Finchè il valore non è una parola oppure la lunghezza è uguale a 0 richiedi di inserire la parola.*/
while(!word || word.length === 0){
    word = prompt('Inserisci una parola');
}