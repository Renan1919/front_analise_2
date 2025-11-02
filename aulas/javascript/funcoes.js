// funções são blocos de código que podem ser reaproveitados
// ao longo da execução do programa
// características:
//     > podem ser nomeados ou não
//     > podem receber parâmetros ou não
//     > podem retornar valores ou não

// declaração de função
// function dizOla() {
//     alert('Diz olá!')
// }
// function dizOlaPessoa(nome) {
//     alert(`Não seja tímido(a)!' ${nome}. 'Fala oi!`)
// }
// const jogadores = ['Neymar', 'Ronaldinho', 'Messi']
// const frutas = ['banana', 'maçã', 'morango']

// function formataTexto(lista){
//     for(let texto of lista){
//         console.log(texto.toUpperCase())
//         // texto.toLowerCase() -> deixa tudo minúsculo
//         // texto.trim() -> remove espaços em branco
//         // texto.join(' outra coisa ') -> junta com outro texto
//     }
// }
// formataTexto(jogadores)

// --- Função de Adição ---
function adicao(n1 , n2){
    return n1 + n2
}
const resultadoAdicao = adicao(100, 5)  + 30
console.log(`Adição: ${resultadoAdicao}`)


// --- Subtração ---
function subtracao(n1, n2) {
    return n1 - n2
}
const resultadoSubtracao = subtracao(1000, 599) + 100
console.log(`Subtração: ${resultadoSubtracao}`)


// --- Multiplicação ---
function multiplicacao(n1, n2) {
    return n1 * n2
}
const resultadoMultiplicacao = multiplicacao(10, 50)
console.log(`Multiplicação: ${resultadoMultiplicacao}`)


// --- Divisão ---
function divisao(n1, n2) {
    // Adiciona uma verificação para não dividir por zero
    if (n2 === 0) {
        return "Erro: Divisão por zero!"
    }
    return n1 / n2
}
const resultadoDivisao = divisao(500, 5)
console.log(`Divisão: ${resultadoDivisao}`)


// Invocar ou chamar a função
// dizOla()
// dizOlaPessoa('Robson')
// dizOlaPessoa('Ana')
// dizOlaPessoa('Maria')
// dizOlaPessoa('33')