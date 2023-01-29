let num = document.getElementById('inum')
let lis = document.querySelector('select#itab')
let res = document.querySelector('div#res')
let vet = valores []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (lis.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo Ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

function verificar() {

}