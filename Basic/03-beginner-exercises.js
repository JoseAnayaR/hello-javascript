/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un comentario de una sola linea

// 2. Escribe un comentario en varias líneas

/*Este es un comentario 
de varias
lineas*/ 

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let int = 1
let float = 1.5
let string = "String"
let boolean = true
//let undefinedvalue
let nullValue = null
let symbol = Symbol("mysymbol")
let bigInt = 321654616842318613246126813518313565186n

// 4. Imprime por consola el valor de todas las variables
console.log("\n",int,"\n",float,"\n",string,"\n",boolean,"\n",undefinedvalue,"\n",nullValue,"\n",symbol,"\n",bigInt)
// 5. Imprime por consola el tipo de todas las variables
console.log("\n",typeof(int),"\n",typeof(float),"\n",typeof(string),"\n",typeof(boolean),"\n",typeof(undefinedvalue),"\n",typeof(nullValue),"\n",typeof(symbol),"\n",typeof(bigInt))
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
int = 2
float = 2.5
string = "String1"
boolean = false
undefinedvalue
nullValue = null
symbol = Symbol("mysymbol2")
bigInt = 132351230354135681351681168518165168n

console.log("\n",int,"\n",float,"\n",string,"\n",boolean,"\n",undefinedvalue,"\n",nullValue,"\n",symbol,"\n",bigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
int = "Modificado a string"
string = 3
boolean = null
undefinedvalue
nullValue = Symbol("Modificado")
symbol = true
bigInt = 3.5
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const intc = 1
const floatc = 1.5
const stringc = "String"
const booleanc = true
//const undefinedvalue *******A const declaration must be initialized ******
const nullValuec = null
const symbolc = Symbol("mysymbol")
const bigIntc = 321654616842318613246126813518313565186n
// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
