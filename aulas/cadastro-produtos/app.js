/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
 * 
 * CARD (3 linhas Div com img, h3, p) Classe CSS do card: 'card','imagem-container'
 * Após cada operação imporante Limpar Cache ou Atualizar Card
*/

const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-cards')
const itensProdutos = []

// addEventListener => Escutador de eventos
formulario.addEventListener('submit', function(){
    event.preventDefault()
    const titulo = document.querySelector('#nome').value.trim()
    const descricao = document.querySelector('#descricao').value.trim()
    const urlImagem = document.querySelector('#img').value.trim()
    itensProdutos.push({titulo, descricao, urlImagem})

    console.log(itensProdutos)

    formulario.reset()
})

// Criar uma função que gera o template do Card
function criarCardNovo(){
    // TODO: Criar tags html e retornar
}

// Renderizar o card novo na página do app
function renderizarCards(){
    // TODO: Inserir card atualizado na página
    criarCardNovo()
}

btnRemover.addEventListener('click', function(){
    alert('Isso vai deletar um card')
})