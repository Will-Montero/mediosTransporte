let transport =prompt("ingrese un medio de transporte").toLowerCase("");

if (transport == "avion") {
    alert("medio de transporte aéreo que tiene 20 llantas");
} else {
    if (transport == "barco") {
        alert("medio de transporte acuático por lo tanto no tiene llantas");
     } else {
        if (transport == "camion") {
            alert("medio de transporte que tiene más de 4 llantas");
        } else {
            if (transport == "carro") {
                alert("medio de transporte terrestre que tiene 4 llantas");
            } else {
                if (transport == "moto") {
                    alert("medio de transporte terrestre que tiene 2 llantas");
                } else {
                    if (transport == "monociclo") {
                        alert("medio de transporte terrestre de una sola rueda");
                    } else {
                        alert("por favor ingrese un medio de transporte acuático, terretre o aéreo");
                    }
                }
             
            }
        }
     }
}



