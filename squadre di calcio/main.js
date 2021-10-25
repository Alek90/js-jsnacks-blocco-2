/* Creare un array di squadre di calcio.
   Ogni squadra dovrà avere come proprietà un nome da compilare, e un  numero di punti fatti ed uno di falli subiti settati a 0.  
*/

// setting punteggi

let falliSubiti = 0;
let punti = 0;

//Squadre:
let squadre = [
    {
        società: "Inter",
        falliSubiti,
        punti
    },
    {
        società: "Napoli",
        falliSubiti,
        punti
    },
    {
        società: "Milan",
        falliSubiti,
        punti
    },
    {
        società: "Roma",
        falliSubiti,
        punti
    }
] 

console.log(squadre);

/* Generare numeri random in sostituzione dei valori 0 nelle proprietà falliSubiti e punti.
*/

// funzione utile:

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


for (i=0; i<squadre.length; i++) {

    squadre[i].falliSubiti = getRndInteger(0, 10);

    squadre[i].punti = getRndInteger(0, 15);

}
console.log(squadre);