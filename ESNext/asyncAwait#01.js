// Async / Await #01 - aula extra

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve() , tempo)
    })
}

// exemplo sem o uso do async / await:

esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

// exemplo com o async / await:

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()       // sempre que uma função assíncrona chama outra função assíncrona, pode-se usar o "await" e esperar o Promise ser resolvido.

    await esperarPor(1500)
    console.log(`Async / Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async / Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async / Await ${valor + 2}...`)

    return valor + 3
}

executar().then(console.log)        // quando sair do assíncronismo e entrar no código síncrono normal, tem que acessar o valor a partir do ".then()"

// exemplo para manter no assync:
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()