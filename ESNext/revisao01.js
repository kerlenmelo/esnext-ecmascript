// Revisão

// let e const
{
    var a = 2
    let b = 3
    console.log(b)  // let têm escopo de bloco.
}
console.log(a)  // var tem escopo global, nesse modulo.

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)   // string delimitada por crase(` `), permitindo que dentro da string tenha variáveis;
                                    // e as variáveis precisam ser delimitadas por ${}.

// Destructuring
const [l, e, ...tras] = 'Cod3r'    // desestruturando uma string
console.log(l, e, tras)    // Saída: C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2]    // desestruturando um array
console.log(x, y)    // Saída: 1 2

const { idade, nome } = { nome:'Ana', idade: 19 }    // desestruturando um objeto
console.log(nome, idade)    // Saída: Ana 19