// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
// peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine = [

    zucchina1 = {
        varieta: 1,
        peso: 20,
        lunghezza: 15
    },

    zucchina2 = {
        varieta: 2,
        peso: 15,
        lunghezza: 20
    },

    zucchina3 = {
        varieta: 3,
        peso: 40,
        lunghezza: 40
    },

    zucchina4 = {
        varieta: 4,
        peso: 30,
        lunghezza: 2
    },

    zucchina5 = {
        varieta: 5,
        peso: 12,
        lunghezza: 4
    },

    zucchina6 = {
        varieta: 6,
        peso: 3,
        lunghezza: 6
    },

    zucchina7 = {
        varieta: 7,
        peso: 5,
        lunghezza: 18
    },

    zucchina8 = {
        varieta: 8,
        peso: 10,
        lunghezza: 6
    },

    zucchina9 = {
        varieta: 9,
        peso: 18,
        lunghezza: 7
    },

    zucchina10 = {
        varieta: 10,
        peso: 50,
        lunghezza: 8
    },
]

pesoCalcolato = []

for (var i = 0; i < zucchine.length; i++) {

    var pesoZucchine = (zucchine[i].peso)
    pesoCalcolato.push(pesoZucchine)

}

console.log(pesoCalcolato)

console.log(
    pesoCalcolato.reduce(function (acc, val) { return acc + val; }, 0)
)


// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchineLunghe = []
var zucchineCorte = []

for (var i = 0; i < zucchine.length; i++) {
    var lunghezzaZucchine = (zucchine[i].lunghezza)

    if (lunghezzaZucchine <= 15) {
        zucchineCorte.push(lunghezzaZucchine)
    } else {
        zucchineLunghe.push(lunghezzaZucchine)
    }
}


console.log(zucchineLunghe);
console.log("" + zucchineLunghe.reduce(function (acc, val) { return acc + val; }, 0)
);
console.log(zucchineCorte);
console.log("Il risultato del p" + zucchineCorte.reduce(function (acc, val) { return acc + val; }, 0)
);