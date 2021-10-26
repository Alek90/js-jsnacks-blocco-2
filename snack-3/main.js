/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/ 



let number = [];
let userNumbers = [];

let userNumber = prompt("scegli un numero")

if (userNumber < 50) {
    userNumbers.push(userNumber)
    console.log(userNumbers);
}

let newUserNumber = prompt("scegli un altro numero")

/*
    Se userNumber < 50, chiedi un altro numero.
    Se userNumber + userNumber < 50, chiedi un altro numero.
*/