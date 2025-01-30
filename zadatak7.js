/*Napiši funkciju jePalindrom(niz), koja provjerava da li se niz čita isto sprijeda i straga.

	Ulaz: 
	
console.log(jePalindrom([1, 2, 3, 2, 1]));
console.log(jePalindrom([1, 2, 3, 4, 5]));
*/

let jePalindrom = (niz) => {
  let originalniNiz = [...niz].join('')
  let obrnutiNiz = [...niz].reverse().join('')
  if (originalniNiz === obrnutiNiz) return 'Niz je palindrom'
  return 'Niz nije palindrom'
}

console.log(jePalindrom([1, 2, 3, 4, 5]))
