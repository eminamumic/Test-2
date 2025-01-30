/* Napiši funkciju jeAritmetickiNiz(niz), koja provjerava da li su brojevi u nizu raspoređeni u aritmetičkom nizu (gdje je razlika između svakog uzastopnog para brojeva ista).

	Ulaz: 
	
	console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
console.log(jeAritmetickiNiz([3, 6, 9, 15]));

	Izlaz: 
	
	true
false
*/

let jeAritmetickiNiz = (niz) => {
  let provjera = niz[1] - niz[0]
  niz.forEach((element, index) => {
    if (index >= 1) {
      if (provjera !== niz[index] - niz[index - 1]) {
        return false
      }
      return true
    }
  })
}

console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]))

//NIJE ZAVRSEN
