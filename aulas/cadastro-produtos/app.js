/** ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
*/

const formulario = document.querySelector('#form-user') 
const btnRemover = document.querySelector('#remover') 
const containerCards = document.querySelector('#container-cards') 
 
const itensProdutos = [] // acho que isso vai guardar tudo 
 
// tentando pegar quando enviar o form 
formulario.addEventListener('submit', function(event){ 
    event.preventDefault()  // pra não atualizar a pagina toda hora 
     
    // pegando os campos... espero que funcione 
    const titulo = document.querySelector('#nome').value.trim() 
    const descricao = document.querySelector('#descricao').value.trim() 
    const urlImagem = document.querySelector('#img').value.trim() 
 
    // não sei se precisa validar mas vou deixar assim mesmo 
    if(titulo === "" || descricao === "" || urlImagem === ""){ 
        alert("Preencha tudo ai por favor") 
    } 
 
    // jogando no array pra depois tentar remover 
    itensProdutos.push({ 
        titulo: titulo, 
        descricao: descricao, 
        urlImagem: urlImagem 
    }) 
 
    console.log("array até agora:", itensProdutos) 
 
    // criando um card novo (eu acho que tá certo) 
    let novoCard = criarcardnovo(titulo, descricao, urlImagem) 
 
    // jogando o card no html 
    renderizarcard(novoCard) 
 
    // limpando o formulário porque tava enchendo tudo 
    formulario.reset() 
}) 
 
// funcao que monta o html do card (tomara que funcione) 
function criarcardnovo (titulo, desc, urlImagem) { 
 
    // tentei fazer com template string pra ver se fica certo 
    let html = ` 
    <div class="card"> 
        <img src="${urlImagem}" alt="${titulo}"> 
        <h2>${titulo}</h2> 
        <p>${desc}</p> 
    </div> 
    ` 
 
    return html 
} 
 
// função só pra jogar o card na tela mesmo 
function renderizarcard (card) { 
    containerCards.innerHTML = containerCards.innerHTML + card 
} 
 
// botao de remover o ultimo card criado 
btnRemover.addEventListener('click', function() { 
 
    // se tiver algo no array eu removo, senão não dá 
    if (itensProdutos.length > 0) { 
 
        itensProdutos.pop()  // removendo do array também 
 
        // removendo do HTML... acho que é isso 
        let ultimo = containerCards.lastElementChild 
        if(ultimo){ 
            containerCards.removeChild(ultimo) 
        } 
 
        console.log('Item removido (eu acho)') 
    } else { 
        alert('Não tem nada para remover ainda') 
    } 
}) 
