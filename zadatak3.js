/*Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.


Primjer:
Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
Izlaz: [“attention”, “attend”]
*/

let imaPrefiks = (nizRijeci, prefix) => {
  let rijeciSaPrefiksom = []
  nizRijeci.forEach((element) => {
    if (element.startsWith(prefix)) {
      rijeciSaPrefiksom.push(element)
    }
  })
  return rijeciSaPrefiksom
}

console.log(imaPrefiks(['pay', 'attention', 'practice', 'attend'], 'at'))
