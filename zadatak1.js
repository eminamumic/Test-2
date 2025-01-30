/*Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable, a za ulaze -–x i x-– smanjuje vrijednost varijable za 1. Pocetna vrijednost je 0.

Primjer:
Ulaz: ["--X","X++","X++", “X++”]
Izlaz: 2
*/

let povecaj = (niz) => {
  let broj = 0
  niz.forEach((element) => {
    if (element === '++X' || element === 'X++') {
      broj++
    }
    if (element === '--X' || element === 'X--') {
      broj--
    }
  })
  return broj
}

console.log(povecaj(['--X', 'X++', 'X++', 'X++']))
