/*Napiši funkciju jesuAnagrami(str1, str2), koja provjerava da li su dva stringa anagrami (sadrže iste karatkere ali u drugačijem redosljedu).

	Ulaz: 

console.log(jesuAnagrami("listen", "silent"));
console.log(jesuAnagrami("hello", "world"));

	Izlaz: 
	
true
false
*/

let jesuAnagrami = (tekst1, tekst2) => {
  let prviTekst = tekst1.toLowerCase().split('').sort().join('')
  let drugiTekst = tekst2.toLowerCase().split('').sort().join('')
  if (prviTekst === drugiTekst) return 'Jesu anagrami'
  return 'Nisu anagrami'
}

console.log(jesuAnagrami('LISTEN', 'silent'))
