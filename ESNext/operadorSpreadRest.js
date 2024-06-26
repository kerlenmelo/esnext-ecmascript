// Operador ... rest(juntar)/spread(espalhar)

// usar rest com parâmetro de função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))  // Saída: 14

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)    // Saída: { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)    // Saída: [ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]