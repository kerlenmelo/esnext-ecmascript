// Promise #05 - aula extra

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        v => consol.log(v),
        erro => console.log(`Erro Específico: ${erro}`)  // meu código não trata o erro aqui
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro Geral: ${erro}`))
    .then(() => console.log('Fim!'))  // se cair no "catch", não chega mais nenhuma informação.