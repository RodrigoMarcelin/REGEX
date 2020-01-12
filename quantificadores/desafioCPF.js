const texto= `CPF dos aprovados:
- 600.567.890-12
-765.998.345-23
- 418.557.738-99
427.355.434-98`

console.log(texto.match(/\d.*/g))// minha expressão melhor que a do professor
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))// professor