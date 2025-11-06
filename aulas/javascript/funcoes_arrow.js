/*
* Funções Arrow são funções anônimas, ou seja, não possuem nome.
* Podem ser passadas como parâmetro para outras funções.
* ou podem ser atribuídas a variáveis.
* Em Javascript, funções são conhecidas como "cidadãos de primeira classe".
*/
let numero = 0
const intervalo1 = setInterval(function(){
    // numero = numero + 10
    numero += 10
    console.log(numero)
}, 1000)

// let numero = 0
// setInterval (()=> {
//     numero = numero + 100
//     console.log(numero)
// }, 1000)

setTimeout (()=>{
    clearInterval(intervalo1)
}, 5000)


// function calc2(x, y) {}
// const calcFinal = calc2(2, 3)
// // const calculadora = function() {}
// const nomeCompleto0 = (nome, sobrenome) => {
//     return 'Pedro'
// }
// const nomeCompleto1 = (nome, sobrenome) => {
//     return nome
// }
// const nomeCompleto2 = (nome, sobrenome) => {
//     return nome + sobrenome
// }