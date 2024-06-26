// Set
// Não aceita repetição / Não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')  // ele simplesmente ignora, por nao aceitar repetição

console.log(times)    // Saída: Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size)    // Saída: 5
console.log(times.has('vasco'))    // Saída: false
console.log(times.has('Vasco'))    // Saída: true
times.delete('Flamengo')
console.log(times.has('Flamengo'))    // Saída: false

// outra maneira de instanciar um set
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)    // Saída: Set(3) { 'Raquel', 'Lucas', 'Julia' }