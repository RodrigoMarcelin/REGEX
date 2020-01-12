const texto = 'João é calmo, mas no transito fica nervoso.'

//Positive lookahead
console.log(texto.match(/[\wÁ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÁ-ú]+(?=\.,)/gi))
console.log(texto.match(/[\wÁ-ú]+(?=, mas)/gi))

//Negative lookahead
console.log(texto.match(/[\wÁ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÁ-ú]+[\s|\.](?!,)/gi))