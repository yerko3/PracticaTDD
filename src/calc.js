// src/calc.js
// Operaciones básicas: suma, resta, multiplicación, división y raíz cuadrada.

function add(a, b) {
return a + b
}

function sub(a, b) {
return a - b
}

function mul(a, b) {
return a * b
}

function div(a, b) {
if (b === 0) throw new RangeError('Division by zero')
return a / b
}

function sqrt(x) {
if (x < 0) throw new RangeError('Square root of negative number')
return Math.sqrt(x)}

// Exportacion al final (ESM), manteniendo los imports con nombre en los tests
export { add, sub, mul, div, sqrt }