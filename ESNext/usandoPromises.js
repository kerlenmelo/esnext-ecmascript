// Refatorando Callbacks p/ Promises
/* Desafio: Obter 3 arquivos JSON de três turmas de alunos diferentes, para extrair os nomes:
    * http://files.cod3r.com.br/curso-js/turmaA.json
    * http://files.cod3r.com.br/curso-js/turmaB.json
    * http://files.cod3r.com.br/curso-js/turmaC.json
*/

// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

// outra forma mais interessante:
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    // sempre que usar promise, muito importante colocar o tratamento de erro
    .catch(e => console.log(e.message))

// para ver cair no reject
getTurma('D').catch(e => console.log(e.message))