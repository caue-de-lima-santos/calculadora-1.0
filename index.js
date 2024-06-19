function somar() {
    const termo1 = (window.document.getElementById('num1'))
    const termo2 = (window.document.getElementById('num2'))
    const termo1num = Number(termo1.value)
    const termo2num = Number(termo2.value)
    const result = termo1num + termo2num
    window.document.getElementById('res').innerHTML = 'resultado : '+ result
}

function subtrair() {
    const termo1 = (window.document.getElementById('num1'))
    const termo2 = (window.document.getElementById('num2'))
    const termo1num = Number(termo1.value)
    const termo2num = Number(termo2.value)
    const result = termo1num - termo2num
    window.document.getElementById('res').innerHTML = 'resultado : '+ result
}

function multiplicar() {
    const termo1 = (window.document.getElementById('num1'))
    const termo2 = (window.document.getElementById('num2'))
    const termo1num = Number(termo1.value)
    const termo2num = Number(termo2.value)
    const result = termo1num * termo2num
    window.document.getElementById('res').innerHTML = 'resultado : '+ result
}

function dividr() {
    const termo1 = (window.document.getElementById('num1'))
    const termo2 = (window.document.getElementById('num2'))
    const termo1num = Number(termo1.value)
    const termo2num = Number(termo2.value)
    const result = termo1num / termo2num
    window.document.getElementById('res').innerHTML = 'resultado : '+ result
}