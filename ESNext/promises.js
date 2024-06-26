// Promises
// representa uma operação assincrona, trabalha com o conceito de promessa, que pode ser atendida ou rejeitada dependendo da situação.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        // setTimeout apenas para simular uma ação de tempo maior de processamento
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))