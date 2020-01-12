const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g))// não precisa de escape deentro do conjunto
console.log(texto.match(/[$-?]/g))// isso é um intervalo (range)

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^