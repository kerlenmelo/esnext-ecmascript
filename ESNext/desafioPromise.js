// Desafio Promise - aulas extras

/* Desafio:
*  encapsular dentro de uma promise a chamada do método readFile do File System; 
*/

// Minha implementação

const fs = require('fs')

const path = require('path')

const caminho = path.resolve(__dirname, 'dados.txt')

const promessa = new Promise(resolve => {
    fs.readFile(caminho, 'utf-8', (err, conteudo) => {
        if(err) { 
            console.log(err)
        }
        resolve(conteudo)
    })
})

promessa
    .then(conteudo => console.log(conteudo))