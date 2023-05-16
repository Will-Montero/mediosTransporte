let numerTires = parseInt(prompt("ingrese número de llantas"));
let transport = prompt("ingresa el medio de transporte").toLowerCase();

{
  if (numerTires == NaN || transport == "") {
    alert("ingrese datos requeridos");
  } else {
    {
 if (numerTires > 4 && transport == "terrestre") {
        alert("camion");
      }
      if (numerTires == 4 && transport == "terrestre") {
        alert("carro");
      }
      if (numerTires == 2 && transport == "terrestre") {
        alert("moto o bicicleta");
      }
      if (numerTires == 1 && transport == "terrestre") {
        alert("monociclo");
      }
      if (numerTires == 0 && transport == "acuatico") {
        alert("barco");
      }
      if (numerTires == 20 && transport == "aereo") {
        alert("avion");
      }
    }
  }
}
