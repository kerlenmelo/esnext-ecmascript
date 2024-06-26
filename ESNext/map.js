// Map
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

// console.log(tecnologias.react)   // Dessa forma não funciona
console.log(tecnologias.get('react'))   // Saída: { framework: false }

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

// console.log(chavesVariadas)

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))    // Saída: true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))    // Saída: false
console.log(chavesVariadas.size)    // Saída: 2

// Não pode ter Chaves duplicadas
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')    // Valores podem ser duplicados
console.log(chavesVariadas) 