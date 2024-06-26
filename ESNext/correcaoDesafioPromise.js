// Desafio Promise - aulas extras

/* Desafio:
*  encapsular dentro de uma promise a chamada do método readFile do File System; 
*/

// Correção do professor:

const fs = require('fs')

const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())        // de forma assincrona
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))