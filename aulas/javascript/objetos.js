// dados simples: numéricos, strings, boolean..
// arrays (1,2,3,'ana)
// objetos {nome: 'Robson', idade: 30}
// funções: function somar (){}, () => {}

// Objetos literais
{
    // propriedade: valor
    //      key: value
}

const perfil = {
    nome: 'Robson José',   
    idade: 30,
    solteiro: true,
    profissao: 'Teacher Front-End',
    roupas: ['Camisa Azul', 'Calça Jeans', 'Tênis Branco'],
}

console.log(Object.entries(perfil)) // Traz chave e valor
console.log(Object.keys(perfil)) // Traz só as chaves
console.log(Object.values(perfil)) // Traz só valores



// let dadosPerfil = []

// for(let dados in perfil){
//     dadosPerfil.push(perfil[dados])
// }
// alert(dadosPerfil)

// Atribuição dinâmica
// perfil.roupas = ['Camisa Azul', 'Calça Jeans', 'Tênis Branco']

// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.habilidades)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)