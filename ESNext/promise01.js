// Promise #01 - aula extra
let a = 1
console.log(a)  // você já tem a variável a sua disposição

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})   // você tem a promessa de algo que vai ser executado no futuro e devolvido no futuro
    // para gerar esse dado é necessário passar uma função como parâmetro

console.log(typeof(p))  // object

p.then(function(valor) {
    console.log(valor)    // Saída: 3
})
// o método then também recebe uma função como parâmetro, e o parâmetro recebido é exatamente o que foi "devolvido" da promise;
// a função "then()" só será chamada quando a promessa for cumprida
// o promise pode passar apenas um único valor/dado; e a função "then()" lógicamente receberá apenas um parâmetro sempre.

// OUTRO EXEMPLO:
let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p2
    .then(valor => valor[0])    // pega o 1º elem.
    .then(primeiro => primeiro[0])    // pega a 1ª letra do 1º elem.
    .then(letra => letra.toLowerCase())    // transforma letra para minuscula
    .then(letraMinuscula => console.log(letraMinuscula))    // Saída: a

// uma das vantagens do promise é encadear as chamadas da função then(), e elas irem executando uma após a outra;
// o resultado de um método then() é passado para o próximo método then() e assim sucessivamente.


/* OBSERVAÇÕES:
()
* ao inves de ser passadas funções anônimas, podem ser passadas funções;
*   ex: const primeiroElemento = stringOuArray => stringOuArray[0]
*       const letraMinuscula = letra => letra.toLowerCase()
*       ...
*       .then(primeiroElemento)
*       .then(primeiroElemento)
*       .then(letraMinuscula)
*       .then(console.log)
*
* geralmente o nome do parâmetro que é passado no Promise é "resolve"
*   ex: new Promise(function(resolve) {
*           ...
*       })
*/