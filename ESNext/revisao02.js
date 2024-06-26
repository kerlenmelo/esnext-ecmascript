// Revisão 02

// Arrow Function
const soma = (a, b) => a + b 
console.log(soma(2, 2))   // Saída: 4

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()   // Saída: true
lexico2()   // Saída: true

// Parâmetro default
function log(texto = 'node') {
    console.log(texto)
}
log()   // Saída: node
log('ESNext')   // Saída: ESNext

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))  // Saída: 14