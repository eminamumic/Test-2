/* Napiši funkciju jeAritmetickiNiz(niz), koja provjerava da li su brojevi u nizu raspoređeni u aritmetičkom nizu (gdje je razlika između svakog uzastopnog para brojeva ista).

	Ulaz: 
	
	console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
console.log(jeAritmetickiNiz([3, 6, 9, 15]));

	Izlaz: 
	
	true
false
*/
let jeAritmetickiNiz = (niz) => {
  let razlika = niz[1] - niz[0]
  let konacno = niz.reduce((validator, element, index) => {
    if (index === 0) return true
    if (element - niz[index - 1] !== razlika) {
      validator = false
      return validator
    }
    return validator
  }, true)
  return konacno
}
console.log(jeAritmetickiNiz([3, 6, 9, 15]))
