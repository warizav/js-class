const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}


const suma = (number, sum = 0) => (
  number === 0 
    ? sum
    : () => suma(number - 1, sum + number)
)

const st = trampoline(suma)
const r = st(100)

r
