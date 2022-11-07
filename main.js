// Inserisci i dati richiesti
let age=parseInt(prompt("Inserisci la tua età"));
let numeroKm=parseInt(prompt("Inserisci il numero di km che vuoi percorrere"))
// prezzo fisso del biglietto
const prezzo=2;
const prezzointero=(numeroKm * prezzo);


// sconto minorenni
if (age <= 17) {
    let sconto= (numeroKm * prezzo) * 20 / 100;
    let costo=(prezzointero - sconto);
    console.log(costo.toFixed(2));
} else {
    console.log(prezzointero.toFixed(2));
}

if ((age > 18) && (age < 65)){
    console.log(prezzointero.toFixed(2));
}

if (age > 65){
    let sconto= (numeroKm * prezzo) * 40 / 100;
    let costo=(prezzointero - sconto);
    console.log(costo.toFixed(2));
}
