const texto= `Lista telefonica:
-(11) 98756-1212
-98765-4321
-97455-4321
-(12) 99321-5567`

console.log(texto.match(/(\(\d*\)\s?)?\d.*/g))//Minha expressão
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g)) // professor
