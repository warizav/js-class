// Curry 
const dragon =
  name =>
   color =>
     power => `${name} ${color} ${power}`

console.log(dragon('polonio')('red')('fuego'))

// const dragon = {
//   name: 'polonio',
//   color: 'red',
//   power: 'fuego'
// }

function saludo(saludo) {
  return function (name) {
    console.log(saludo, name)
  }
}

const saludoHola = saludo('hola')
saludoHola('Gio')

const saludoHi = saludo('hi')
saludoHola('Willy')

//Recursividad

function add(a, b) {
  if(b === undefined) {
    return b => {
      return add(a, b)
    }
  }
  return a + b 
}

const r = add(2, 5)
r


const r2 = add(2)(5)
r2

// add(2, 5) 7
// add(2)(5) 7

const numbers = [2, 3, 4]
const add2 = add(2)

console.log(numbers.map(add2))

// funcion pura: usa todos sus parametros, retorna un valor, no usa nada que este fuera de ella