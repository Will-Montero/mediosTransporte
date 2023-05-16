let day = prompt("ingrese dia").toLowerCase("") //martes - MARTES - MaRTES (martes)

if (day == "sabado" || day == "domingo") {
    alert("es un dia de fin de semana");
} else {
    if (day == "lunes" || day == "martes" ||  day =="miercoles" || day == "jueves" || day == "viernes") {
        alert("es un dia de semana");
    } else {
        alert("por favor ingrese un dia de la semana");
    }
}
