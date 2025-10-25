const lugares = ['praia', 'montanha', 'cachoeira']
const mensagem = `
        -- ROTEIRO DE VIAGENS -- 
        Lugares: ${lugares}
        -----------------------`
alert(mensagem) // Fake Menu
const escolhaUsuario = prompt('Pra onde deseja viajar? ')
if (escolhaUsuario == null || escolhaUsuario == '') {
    alert('Por favor digite um  valor da lista de viagem!')
} else {
    if (lugares.includes(escolhaUsuario)) {
        if (escolhaUsuario == 'praia') {
            //alert('Praia!!')
            window.location.href = './praia.html'
        } else if (escolhaUsuario == 'montanha') {
            //alert('Montanha...!!')
            window.location.href = './montanha.html'
        } else if (escolhaUsuario == 'cachoeira') {
            //alert('Cachoeira...!!')
            window.location.href = './cachoeira.html'
        }
    }
}