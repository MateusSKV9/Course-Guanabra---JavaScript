function contar() {
    var ini = window.document.getElementById('iini')
    var fim = window.document.getElementById('ifim')
    var pass = window.document.getElementById('ipass')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = `Impossível contar! `
        window.alert('[ERRO] Faltam dados! ')
  
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p == 0) {
            window.alert('Passo inválido! Considerando passo 1:')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
            }
   
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
    
}