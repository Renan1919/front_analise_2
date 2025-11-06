const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUrlImg = 'https://fictional-broccoli-vwvvw4v65v5fwq5x-5502.app.github.dev/aulas/LampadaJavascript/'

// alert(lampada.src)
// alert(btnAlternar.textContent)
btnAlternar.addEventListener('click', function () {
    if (lampada.src == baseUrlImg+ 'lampada1.png') {
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = 'Lâmpada Acesa!'
        btnAlternar.style.backgroundColor = 'yellow'
    } else {
        lampada.src = 'lampada1.png'
        btnAlternar.textContent = 'Lâmpada Apagada!'
        btnAlternar.style.backgroundColor = '#ade534'
    }
})
btnAlternar.addEventListener('dblclick', function () {
        lampada.src = 'lampada0.png'
        btnAlternar.textContent = 'Lâmpada Queimada!'
        btnAlternar.style.backgroundColor = 'red'
})