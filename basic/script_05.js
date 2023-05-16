// condicionales - if/else

// Algoritmo que dependiendo si el o la usuario son mayor de 18 años habilitan un catalogo de peliculas violentas
//si el pais es china asi sea mayor de 18 años no habilite el catálogo

let age = prompt("ingrese edad");
let country = prompt("ingresa tu país")


if (age >= 18 && country != "china") {
    alert("se ha desbloqueado el catalogo de peliculas violentas")
} else {
    alert("no tienes permiso para ver peliculas violentas")
}

/**
 * > : es mayor a algo
 * < : es menor  a algo
 * == : comparar si un valor es igual al otro
 * >= : es mayor o igual
 * <= : es menor o igual
 *  != diferente
 * operadores lógicos
 * &&: y
 * ||: o
 */
