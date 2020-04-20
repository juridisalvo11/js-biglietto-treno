//inserire kilometri da percorrere
var km_passeggero = prompt('Kilometri da percorrere');
//console.log(km_passeggero + 'km');
//inserire anni passegero
var anni_passeggero = prompt('Anni passeggero');
//console.log(anni_passeggero);
//calcolare prezzo totale viaggio
var prezzo_kilometri = km_passeggero * 0.21;
//applicare sconto
if (anni_passeggero < 18) {
    var prezzo_kilometri = Math.round(prezzo_kilometri * 0.8);
    //console.log((prezzo_kilometri) - (prezzo_kilometri / 100) * 20);
    //console.log(prezzo_kilometri * 0.8);
} else if (anni_passeggero > 65) {
    var prezzo_kilometri = Math.round(prezzo_kilometri * 0.6);
    //console.log((prezzo_kilometri) - (prezzo_kilometri / 100) * 40);
    //console.log(prezzo_kilometri * 0.6);
} else {
    //console.log(prezzo_kilometri);
}

document.getElementById('km-viaggio').innerHTML = km_passeggero + ' Km'
document.getElementById('anni-passeggero').innerHTML = anni_passeggero
document.getElementById('prezzo-biglietto').innerHTML = prezzo_kilometri + '€'

document.getElementById('box').setAttribute('class', 'visible');
document.getElementById('kilometri').setAttribute('class', 'visible');
document.getElementById('eta').setAttribute('class', 'visible');
document.getElementById('prezzo').setAttribute('class', 'visible');
