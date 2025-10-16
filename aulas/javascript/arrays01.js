/*
Arrays são agrupadores de valores numéricos, textuais,
booleanos, objetos, etc. Eles são ordenados a partir
do índice '0'
Ex.: const time = ['Pedro', 22, 'Julio', 'Ana']
    // indices        0      1     2       3
*/ 
const vestuario = ['camisa', 'tenis adidas', 'calça jeans', 'sapato', 'óculos']
vestuario[33] = 'boné' // Atribuição dinâmica

for(let valor of vestuario) { // 'in' busca o indice 'of' busca os valores
    console.log(valor)
}
// console.log(vestuario[1])
// console.log(vestuario[0])
// console.log(vestuario[2])
// console.log(vestuario[3])
// console.log(vestuario[33])