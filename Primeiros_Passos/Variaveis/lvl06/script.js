// Diferença entre String e "Template" String

// String

var animal = 'Tiger'
var specie = 'Siberian'
var completeName = specie + ' ' + animal 

console.log('Name: ' + completeName)


// "Template" String

var animal = 'Bear' 
var specie = 'Polar'
var completeName = specie + animal 

console.log(`Name: ${specie} ${animal}`)
