/*Consolidar el entendimiento y la aplicación de estructuras de datos avanzadas en JavaScript, empleando objetos, sets y maps para organizar, almacenar y manipular información de manera eficiente. Con esta historia, cada coder podrá reforzar:
La creación y manipulación de objetos
El uso de sets para garantizar unicidad de datos
El uso de maps para almacenar información asociativa
La implementación de bucles (for...in, for...of) y métodos (forEach, Object.keys(), Object.values(), Object.entries())
Validaciones básicas para garantizar datos correctos*/

/*1. Creación del objeto de productos:
Cada producto debe contener las propiedades:
id (clave única del producto)
nombre (nombre del producto)
precio (valor numérico)*/

const productos = [
    {id: 1, nombre: "portatil", precio: 1000},
    {id: 2, nombre: "telefono", precio: 500},
    {id: 3, nombre: "tablet", precio: 300},
    {id: 4, nombre: "monitor", precio: 200},
    {id: 5, nombre: "teclado", precio: 100},
    {id: 6, nombre: "mouse", precio: 50},
    {id: 7, nombre: "impresora", precio: 200},
    {id: 8, nombre: "camara", precio: 300},
    {id: 9, nombre: "microfono", precio: 50},
    {id: 10, nombre: "auriculares", precio: 100}
]
/*2. Uso de Set en JavaScript:
Crea un Set con una lista de números que incluya valores repetidos.
Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente.
Agrega un nuevo número al Set utilizando el método .add().
Verifica si un número específico existe dentro del Set con .has().
Elimina un número del Set con .delete().
Recorre el Set utilizando un for…of para mostrar cada valor*/

const numeros = new Set([1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10])
console.log(numeros)

numeros.add(11)
console.log(numeros)

console.log(numeros.has(4))

numeros.delete(4)
console.log(numeros)

for (const numero of numeros) {
    console.log(numero)
}

/*3. Creación de un Map:
Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor).
Asegúrate de que el Map refleje correctamente la información adicional de cada producto.*/

const categorias = new Map([
    ["portatil", "computacion"],
    ["telefono", "comunicacion"],
    ["tablet", "computacion"],
    ["monitor", "perifericos"],
    ["teclado", "perifericos"],
    ["mouse", "perifericos"],
    ["impresora", "oficina"],
    ["camara", "fotografia"],
    ["microfono", "audio"],
    ["auriculares", "audio"]
])
console.log(categorias)

/*4. Iteración sobre las estructuras de datos:
Recorre e imprime los datos en la consola:
Usa for…in para listar propiedades y valores del objeto.
Usa for…of para recorrer el Set.
Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva.*/

for (const producto of productos) {
    console.log(producto)
}

for (const numero of numeros) {
    console.log(numero)
}

for (const [categoria, producto] of categorias) {
    console.log(`${categoria}: ${producto}`)
}

for (const propiedad in productos[0]) {
    console.log(`${propiedad}: ${productos[0][propiedad]}`)
}

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} → Producto: ${valor}`)
})

/*5. Validación y pruebas:
Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
Realiza pruebas mostrando:
Lista completa de productos (objeto)
Lista de productos únicos (Set)
Categorías y nombres de productos (Map)*/

function validarProducto(producto) {
    if (producto.id && producto.nombre && producto.precio > 0) {
        console.log("Producto válido")
    } else {
        console.log("Producto inválido")
    }
}


validarProducto(productos[0])
validarProducto(productos[1])
validarProducto(productos[2]) 