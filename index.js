var dec_bin = document.getElementById('dec_bin')
var dec_ter = document.getElementById('dec_ter')
var dec_oct = document.getElementById('dec_oct')
var dec_hex = document.getElementById('dec_hex')
var bin_dec = document.getElementById('bin_dec')
var ter_dec = document.getElementById('ter_dec')

var num = document.getElementById('num')

bin = ''
ter = ''
oct = ''
hex = ''

function decimal_binario(a){
    while(a > 1){
        resto = a % 2 
        a = (a / 2)|0 
        bin = bin + resto
    }
    bin = bin + a 
    var resultado = (bin.split('').reverse().join(''))
    document.getElementById('saida').textContent = resultado
}
function decimal_ternario(b){
    while(b > 2){
        resto = b % 3 
        b = (b / 3)|0 
        ter = ter + resto
    }
    ter = ter + b 
    var resultado = (ter.split('').reverse().join(''))
    document.getElementById('saida').textContent = resultado
}
function decimal_octadecimal(c){
    while(c > 7){
        resto = c % 8 
        c = (c / 8)|0 
        oct = oct + resto
    }
    oct = oct + c
    var resultado = (oct.split('').reverse().join(''))
    document.getElementById('saida').textContent = resultado
}
function decimal_hexadecimal(d){
    while(d > 15){
        resto = d % 16 
        d = (d / 16)|0 
        hex = hex + resto
    }
    hex = hex + d
    var resultado = (hex.split('').reverse().join(''))
    document.getElementById('saida').textContent = resultado
}



function binario_decimal(e){
    resultado = 0
    cont01 = 0
    cont02 = 1 
    digitos = e.length
    digitos -= 1
    while(digitos > -1){
        posicao = e.substring(cont01,cont02)
        decimal = Number(posicao * (digitos**2))
        cont01 += 1
        cont02 += 1
        digitos -= 1
        resultado = resultado + decimal
    }
    document.getElementById('saida').textContent = resultado
}

function ternario_decimal(f){
    resultado = 0
    cont01 = 0
    cont02 = 1 
    digitos = f.length
    digitos -= 1
    while(digitos > -1){
        posicao = f.substring(cont01,cont02)
        decimal = Number(posicao * (digitos**3))
        cont01 += 1
        cont02 += 1
        digitos -= 1
        resultado = resultado + decimal
    }
    document.getElementById('saida').textContent = resultado
}




function converter(){
    if(dec_bin.checked){
        decimal_binario(Number(num.value))
    }
    if(dec_ter.checked){
        decimal_ternario(Number(num.value))
    }
    if(dec_oct.checked){
        decimal_octadecimal(Number(num.value))
    }
    if(dec_hex.checked){
        decimal_hexadecimal(Number(num.value))
    }

    if(bin_dec.checked){
        binario_decimal(num.value)
    }
    if(ter_dec.checked){
        ternario_decimal(num.value)
    }
}