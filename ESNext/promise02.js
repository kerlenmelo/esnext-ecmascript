// Promise #02 - aula extra

setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function(){
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')

        }, 2000)
    }, 2000) 
}, 2000)    // tempo em milisegundos

// exemplo usando promise:
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

// let p = esperarPor(3000)    // recebe uma promise

// para acessar qualquer valor que tenha sido gerado no "resolve":
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)