function somar(){
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent = 
    'O resultado da soma é igual a: ' + (val1 + val2)
}

function subtrair(){
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent = 
    'O resultado da subtração é igual a: ' + (val1 - val2)
}

function dividir(){
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

function multiplicar(){
    var val1 = parseFloat(document.getElementById('val1').value)
    var val2 = parseFloat(document.getElementById('val2').value)
    document.getElementById('result').textContent = 
    'O resultado da multiplicação é igual a: ' + (val1 * val2)
}
