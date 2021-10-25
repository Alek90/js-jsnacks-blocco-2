/* Creare un array di oggetti - bici da corda.
   Per ogni oggetto assegnare valori nome e peso.
   mandare a schermo la bici più leggera.  
*/

// Array di oggetti:

const bikes = [
    {
        brand: "trek",
        weight: 10.5,
    },
    {
        brand: "orbea",
        weight: 11,
    },
    {
        brand: "scott",
        weight: 10.3,
    },
    {
        brand: "cannondale",
        weight: 10.5,
    }
]

let lightestBike = bikes[0].weight;
/* let bikeWeight = []; */

for (i=0; i<bikes.length; i++) {
    let bike = bikes[i];
    /* bikeWeight.push(bikes[i].weight);
    let weight = bikeWeight.value;
    let minWeight = Math.min.apply(weight) */

    //post correzione
    if (bike.weight < lightestBike) {
        lightestBike = bike;
    }


}