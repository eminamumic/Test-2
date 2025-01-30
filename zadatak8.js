/*Napiši funkciju pomjeriNule(niz), koja premješta sve nule u nizu na kraj, ali zadržava redoslijed ostalih brojeva.

	Ulaz: 

	console.log(pomjeriNule([0, 1, 0, 3, 12]));
console.log(pomjeriNule([0, 0, 5, 0, 7, 0, 9]));

	Izlaz: 
	
[1, 3, 12, 0, 0]
[5, 7, 9, 0, 0, 0, 0]
*/

let pomjeriNule = (niz) => {
  return [
    ...niz.filter((element) => element !== 0),
    ...niz.filter((element) => element === 0),
  ]
}

console.log(pomjeriNule([0, 1, 0, 3, 12]))
