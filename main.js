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
    document.getElementById("testo").innerHTML=`Vuoi percorrere ${numeroKm}km ed hai ${age}anni quindi il prezzo scontato del 20% è di ${costo} euro`;
}
// sconto età over 65 
else if ( age >= 65){
    let sconto= (numeroKm * prezzo) * 40 / 100;
    let costo=(prezzointero - sconto);
    console.log(costo.toFixed(2));
    document.getElementById("testo").innerHTML=`Vuoi percorrere ${numeroKm}km ed hai ${age} anni quindi il prezzo scontato deò 40% è di ${costo} euro`;
}
// età compresa
    else{
        document.getElementById("testo").innerHTML=`Vuoi percorrere ${numeroKm}km ed hai ${age} anni quindi non usufruendo di nessuno sconto il prezzo del biglietto è di ${prezzointero} euro`
        console.log(prezzointero.toFixed(2));
    }