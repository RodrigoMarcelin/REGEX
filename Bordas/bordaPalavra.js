const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto.match(/\bdia\w+/gi))
console.log(texto.match(/\w+dia\b/gi))
console.log(texto.match(/\w+dia\w+/gi))
console.log(texto.match(/\bdia\b/gi))

// borda é não \w, que é [^A-Za-z0-9_]... temos problemas na lingua portuguesa
const texto2 = 'dia diatônica diafragma, média wikipedia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) //a vírgula entra junto
console.log(texto2.match(/([\wÁ-ú-]*)?dia([\wÁ-ú]*)?/gi))
