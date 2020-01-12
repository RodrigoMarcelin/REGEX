//metacaracteres= . ? * + - ^ $ | [ ] { } ( ) \ : /

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // \ serve para pegar um metacaracter de forma literal
console.log(texto.split(regexPonto))
console.log(texto.match(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))