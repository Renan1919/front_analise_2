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
const jogadores = ['Neymar', 'Ronaldinho', 'Messi']
const frutas = ['banana', 'maçã', 'morango']

function formataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase())
        // texto.toLowerCase() -> deixa tudo minúsculo
        // texto.trim() -> remove espaços em branco
        // texto.join(' outra coisa ') -> junta com outro texto
    }
}
// formataTexto(jogadores)
function adicao(n1 , n2){
    return n1 + n2
}
// faça uma versão para subtracao, multiplicacao e divisao 
const resultadoAdicao = adicao(20, 5)  + 30
console.log(`Adição: ${resultadoAdicao}`)


// Invocar ou chamar a função
// dizOla()
// dizOlaPessoa('Robson')
// dizOlaPessoa('Ana')
// dizOlaPessoa('Maria')
// dizOlaPessoa('33')