function carregar() {
    var msg = document.getElementById('mensagem')
    var foto = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${min}h.`
    if (hora >= 0 && hora <12) {
        foto.innerHTML = '<img src="imagens/manhã_elipse.png">'
        document.body.style.background = '#fbe5ae'
    }  
    else if (hora >= 12 && hora < 18){
        foto.innerHTML = '<img src="imagens/tarde_retângulo.png">'
        document.body.style.background = '#f48624'
    }
    else {
        foto.innerHTML = '<img src="imagens/noite_elipse.png">'
        document.body.style.background = '#0e3e62'
    }
}

