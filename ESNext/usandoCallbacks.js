// Usando Callbacks Aninhadas
/* Desafio: Obter 3 arquivos JSON de três turmas de alunos diferentes, para extrair os nomes:
    * http://files.cod3r.com.br/curso-js/turmaA.json
    * http://files.cod3r.com.br/curso-js/turmaB.json
    * http://files.cod3r.com.br/curso-js/turmaC.json
*/

// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})