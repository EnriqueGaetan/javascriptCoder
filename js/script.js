let opcion = true;
let grande = 1000;
let mediano = 750;
let chico = 500;
let bombones = 800;
let tortas = 1500;
let gustos;
let total;
const precioBocha = 250;
const IVA = 1.21;
const envio = 100;

while (opcion) {
  opcion = parseFloat(
    prompt(
      "Bienvenido a Heladeria Fresco. Elegí la cantidad que te queres llevar \n 1 - 1 Kilo \n 2 - 1/2 Kilo \n 3 - 1/4 Kilo \n 4 - Bombones \n 5 - Tortas heladas \n 6 - Por bochas \n 7 - Salir"
    )
  );
  if (opcion === 1) {
    total = grande * IVA;
    grande = alert("El precio total es $" + total);
  } else if (opcion === 2) {
    total = mediano * IVA;
    mediano = alert("El precio total es $" + total);
  } else if (opcion === 3) {
    total = chico * IVA;
    chico = alert("El precio total es $" + total);
  } else if (opcion === 4) {
    total = bombones * IVA;
    bombones = alert("El precio total es $" + total);
  } else if (opcion === 5) {
    total = tortas * IVA;
    tortas = alert("El precio total es $" + total);
  } else if (opcion === 6) {
    let cantidadBochas = parseFloat(prompt("Seleccioná la cantidad de bochas que vas a llevar \(Recorda que podes llevar hasta 3\)"));
    seleccionBochas(cantidadBochas);
  } else if (isNaN(opcion)) {
    alert("Por favor escribí el número de la opción elegida");
  } else if (opcion === 7) {
    alert("Muchas gracias por visitarnos.Te esperamos de vuelta!");
    opcion = false;
  }
}

function seleccionBochas(cantidadBochas){
  alert("El precio total es $" + (cantidadBochas * precioBocha)*IVA);
}