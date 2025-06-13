function somar() {
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent =
        'O resultado da soma é igual a: ' + (val1 + val2)
}
 
function subtrair() {
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent =
        'O resultado da subtração é igual a: ' + (val1 - val2)
}
 
function multiplicar() {
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent =
        'O resultado da multiplicação é igual a: ' + (val1 * val2)
}
 
function dividir() {
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    if (val2 === 0) {
        document.getElementById('result').textContent =
            'Não é possível dividir por zero.'
    } else {
        document.getElementById('result').textContent =
            'O resultado da divisão é igual a: ' + (val1 / val2)
    }
}
 
function media() {
    var lista = document.getElementById('valoresLista').value
    var numeros = lista.split(',').map(Number)
    var soma = numeros.reduce((acc, val) => acc + val, 0)
    var resultado = soma / numeros.length
    document.getElementById('result').textContent =
        'A média é: ' + resultado
}
 
function mediana() {
    var lista = document.getElementById('valoresLista').value
    var numeros = lista.split(',').map(Number).sort((a, b) => a - b)
    var meio = Math.floor(numeros.length / 2)
    var resultado
 
    if (numeros.length % 2 === 0) {
        resultado = (numeros[meio - 1] + numeros[meio]) / 2
    } else {
        resultado = numeros[meio]
    }
 
    document.getElementById('result').textContent =
        'A mediana é: ' + resultado
}
 
function moda() {
    var lista = document.getElementById('valoresLista').value
    var numeros = lista.split(',').map(Number)
    var contagem = {}
    var maxFreq = 0
    var modas = []
 
    numeros.forEach(function (num) {
        contagem[num] = (contagem[num] || 0) + 1
        if (contagem[num] > maxFreq) {
            maxFreq = contagem[num]
        }
    })
 
    for (var num in contagem) {
        if (contagem[num] === maxFreq && maxFreq > 1) {
            modas.push(Number(num))
        }
    }
 
    if (modas.length === 0) {
        document.getElementById('result').textContent =
            'Não há moda (todos os valores aparecem apenas uma vez).'
    } else {
        document.getElementById('result').textContent =
            'A moda é: ' + modas.join(', ')
    }
}
 
 