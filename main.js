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
}
// sconto età over 65 
else if ( age >= 65){
    let sconto= (numeroKm * prezzo) * 40 / 100;
    let costo=(prezzointero - sconto);
    console.log(costo.toFixed(2));
}
// età compresa
    else{
        console.log(prezzointero.toFixed(2));
    }