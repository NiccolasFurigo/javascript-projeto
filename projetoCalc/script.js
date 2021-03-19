let res = document.getElementById('tela')

function soma() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let soma = num1 + num2
    res.innerHTML = ''
    res.innerHTML += `${soma}`
}

function sub() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let sub = num1 - num2
    res.innerHTML = ''
    res.innerHTML += `${sub}`
}

function mult() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let mult = num1 * num2
    res.innerHTML = ''
    res.innerHTML += `${mult}`
}

function div() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let div = num1 / num2
    res.innerHTML = ''
    res.innerHTML += `${div}`
}

function raiz() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let sqrt = Math.sqrt(num1)
    let sqrt2 = Math.sqrt(num2)
    res.innerHTML = ''
    res.innerHTML += `${sqrt} e `
    res.innerHTML += `${sqrt2}`
}

function resto() {
    let num1 = Number(document.getElementById('cNum').value)
    let num2 = Number(document.getElementById('cNum2').value)
    let rest = num1 % num2
    res.innerHTML = ''
    res.innerHTML += `${rest}`
}

function limpar() {
    res.innerHTML = 'Calculando...'
}