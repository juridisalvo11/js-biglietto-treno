//inserire kilometri da percorrere
var km_passeggero = prompt('Kilmetri da percorrere');
console.log(km_passeggero + 'km');
//inserire anni passegero
var anni_passeggero = prompt('Anni passeggero');
console.log(anni_passeggero);
//calcolare prezzo totale viaggio
var prezzo_kilometri = km_passeggero * 2;
//applicare sconto
if (anni_passeggero < 18) {
    console.log((prezzo_kilometri) - (prezzo_kilometri / 100) * 20);
    console.log(prezzo_kilometri * 0.8);
} else if (anni_passeggero > 65) {
    console.log((prezzo_kilometri) - (prezzo_kilometri / 100) * 40);
    console.log(prezzo_kilometri * 0.6);
} else {
    console.log(prezzo_kilometri);
}
