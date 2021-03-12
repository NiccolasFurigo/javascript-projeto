function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img = 'Criança'
            } else if (idade < 21){
                img = 'Jovem'
            } else if (idade < 51){
                img = 'Adulto'
            } else {
                img = 'Velho'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img = 'Criança'
            } else if (idade < 21){
                img = 'Jovem'
            } else if (idade < 51){
                img = 'Adulto'
            } else {
                img = 'Velho'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.innerHTML += `<p>${img}</p>`
    }
}