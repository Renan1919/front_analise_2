// window.alert('Ok') // Mostra um popup
// console.log('Johnny');

/*
- Variáveis são espaços em memória usados para 
armazenar dados reaproveitéveis.
    var - Desaconselhável
    let - Valor que poderá variar
    const - valor que não deve variar
*/
let nome = prompt("Qual é o seu nome? ") // O sinal de '=' é o mesmo que é atribuir valores
let sobrenome = prompt("Qual é o seu sobrenome? ")
const cpf = prompt("Qual seu cpf [Somente números]? ")
const solteiro = true
let roupa = prompt("Qual é o seu estilo de roupa? ")

console.log("---- PERFIL ----\n ")
console.log("Nome: " + nome)
console.log("Sobrenome: " + sobrenome)
console.log("Cpf: " + cpf)
console.log("Solteiro: " + solteiro)
console.log("Roupa: " + roupa)
console.log("---------------\n ")

// window.alert(nome + sobrenome)
// console.log(nome + " " + sobrenome) // O Sinal + é usado pra "concatenar" valores