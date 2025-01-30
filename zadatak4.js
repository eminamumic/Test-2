/*Napisi funkciju koja za kvadratnu matricu, vraca sumu brojeva na dijagonalama.

Primjer:
Ulaz: [[1,2,3],    0,0  0,1 0,2 
       [4,5,6],    1,0  1,1 1,2
       [7,8,9]]    2,0  2,1 2,2
Izlaz: 25 (1 + 5 + 9 + 3 + 7)
*/
// 0,0 1,1 2,2 0,2 2,0  00

let sumaDijagonala = (matrica) => {
  let dijagonale = [
    [0, 0],
    [1, 1],
    [2, 2],
    [0, 2],
    [2, 0],
  ]

  let suma = 0
  matrica.forEach((red, i) => {
    red.forEach((broj, j) => {
      dijagonale.forEach((element) => {
        if (element[0] === i && element[1] === j) {
          suma += broj
        }
      })
    })
  })

  return suma
}

console.log(
  sumaDijagonala([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

//sigurno se ne rjesava ovako ali eto..
