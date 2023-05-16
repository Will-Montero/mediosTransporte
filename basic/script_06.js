// Control de mayusculas y minúsculas (tolowerCase) (toUpperCase)
//conversión de tipos de datos 

//tipo de datos diferentes
//mayusculas y minusculas
//un espacio o caracter en el texto (más adelante)
//vslores vacios
//tildes



let age = parseInt(prompt("ingrese edad"));
let country = prompt("ingresa tu país").toLowerCase();

console.log(age, country)

if (age == 0 || country == "") {
    alert("no ingresaste uno de los valores");
} else {
    if (age >= 18 && country != "china") {
        alert("se ha desbloqueado el catalogo de peliculas violentas");
    } else {
        alert("no tienes permiso para ver peliculas violentas");
    }
}


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
