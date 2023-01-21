function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        imagem.src = 'manha.jpg'
        document.body.style.background = '#BDC2D9'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#FEBBA1'
    } else {
        // BOA NOITE
        imagem.src = 'noite1.jpg'
        document.body.style.background = '#192232'
    }
}

