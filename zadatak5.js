/*Napisi funkciju koja pronalazi ukupnu frekvenciju elemenata koji imaju najveću frekvenciju. Frekvencija elementa je broj njegovih pojavljivanja u nizu.

Primjer 1:
Ulaz: nums = [1,2,2,3,1,4]
Izlaz: 4

Objašnjenje: Brojevi 1 i 2 imaju frekvenciju 2, što je najveća frekvencija u nizu.
Ukupan broj elemenata sa tom frekvencijom je 4.

Primjer 2:
Ulaz: nums =[1,2,3,4,5] 
Izlaz: 5

Objašnjenje: Svi elementi niza imaju frekvenciju 1, što je najveća frekvencija.
Ukupan broj elemenata sa tom frekvencijom je 5.
*/

let frekvencija = (niz) => {
  let brojac = {}
  niz.forEach((element) => {
    if (!brojac[element]) {
      brojac[element] = 1
    } else {
      brojac[element]++
    }
  })

  let najvecaFrekvencija = 0
  for (let broj in brojac) {
    if (brojac[broj] > najvecaFrekvencija) {
      najvecaFrekvencija = brojac[broj]
    }
  }

  let brojBrojevaSaNajvecomFrekvencijom = 0
  for (let broj in brojac) {
    if (brojac[broj] === najvecaFrekvencija) {
      brojBrojevaSaNajvecomFrekvencijom += najvecaFrekvencija
    }
  }

  return brojBrojevaSaNajvecomFrekvencijom
}

console.log(frekvencija([1, 2, 2, 3, 1, 4]))
