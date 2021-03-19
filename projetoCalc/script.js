let res = document.querySelector('div#tela')


function clicar(){
    let num = Number(document.querySelector('input#number').value)
    res.innerHTML = ''
    res.innerHTML += `${num}`
}
