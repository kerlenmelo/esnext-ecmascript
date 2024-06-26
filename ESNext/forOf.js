// For Of
// itera em cima de valores
for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)    // itera em cima de indices.
}

for (let assunto of assuntosEcma) {
    console.log(assunto)    // itera em cima de valores.
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// acessa todo o array
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// acessa somente as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// acessa somente os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// destructuring no array, para pagar chave e valor separadamente
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// percorrendo um Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}