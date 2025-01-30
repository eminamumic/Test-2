/*Napiši funkciju obrniString(tekst) koja prima string i vraća isti string obrnut koristeći petlju(HOF).

	Ulaz: 

	console.log(obrniString("programiranje"));
console.log(obrniString("javascript"));

Izlaz: 

"ejranimargorp"
"tpircsavaj"
*/

let obrniString = (string) => {
  let noviString = []
  string.split('').forEach((element) => {
    noviString.push(element)
  })

  return noviString.reverse().join('')
}

console.log(obrniString('javascript'))
