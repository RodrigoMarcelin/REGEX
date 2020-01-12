texto = 'supermercado superação hiperMERCADO Mercado' 

puts texto.scan(/(?:super)[\wÁ-ú]+/i).join(' ')

# Positive Lokbehind
puts texto.scan(/(?<=super)[\wÁ-ú]+/i).join(' ')

#Negative lookbehind
puts texto.scan(/(?<!super)mercado/i)