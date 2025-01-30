/*Napisi funkciju koja izbacuje svaki drugi najmanji element niza, i ubacuje u novi niz. Pretpostaviti da su elementi u nizu unikatni.
Primjer:
Ulaz: [5, 1, 9 , 3, 7 ,2]
Izlaz: [2, 5, 9]
*/

let drugiNajmanji = (niz) => {
  return niz.sort((a, b) => a - b).filter((element, index) => index % 2 !== 0)
}

console.log(drugiNajmanji([5, 1, 9, 3, 7, 2]))
