// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
// peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine = [

    {
        varieta: 1,
        peso: 20,
        lunghezza: 15
    },

    {
        varieta: 2,
        peso: 15,
        lunghezza: 20
    },

    {
        varieta: 3,
        peso: 40,
        lunghezza: 40
    },

    {
        varieta: 4,
        peso: 30,
        lunghezza: 2
    },

    {
        varieta: 5,
        peso: 12,
        lunghezza: 4
    },

    {
        varieta: 6,
        peso: 3,
        lunghezza: 6
    },

    {
        varieta: 7,
        peso: 5,
        lunghezza: 18
    },

    {
        varieta: 8,
        peso: 10,
        lunghezza: 6
    },

    {
        varieta: 9,
        peso: 18,
        lunghezza: 7
    },

    {
        varieta: 10,
        peso: 50,
        lunghezza: 8
    },
]



console.log(calcoloPeso(zucchine))


// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchineLunghe = []
var zucchineCorte = []

for (var i = 0; i < zucchine.length; i++) {
    var lunghezzaZucchine = (zucchine[i].lunghezza)

    // data la suddivisione in base alla lunghezza come ritorno al peso?
    if (lunghezzaZucchine <= 15) {
        zucchineCorte.push(zucchine[i])
    } else {
        zucchineLunghe.push(zucchine[i])
    }
}
console.log(zucchineLunghe)
console.log(calcoloPeso(zucchineLunghe))
console.log(zucchineCorte)
console.log(calcoloPeso(zucchineCorte))


// data una array di zucchine restituisce il peso totale

function calcoloPeso(array){
    var pesoCalcolato = 0
    for (var i = 0; i < array.length; i++) {
        var peso = (array[i].peso)
        pesoCalcolato += peso
    }
    return pesoCalcolato
}
