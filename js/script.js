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

const bochas = () => {
  do{
    cantidadBochas = parseFloat(prompt("Seleccioná la cantidad de bochas que vas a llevar \(Recorda que podes llevar hasta 3\)"))
    alert("El precio total es $" + (cantidadBochas * precioBocha)*IVA);
  }while(cantidadBochas > 3  || cantidadBochas < 1)
return cantidadBochas;
}

//// MENU PRINCIPAL
let opcion = (parseFloat(prompt("Bienvenido a Heladeria Fresco. Elegí la cantidad que te queres llevar \n 1 - 1 Kilo \n 2 - 1/2 Kilo \n 3 - 1/4 Kilo \n 4 - Bombones \n 5 - Tortas heladas \n 6 - Por bochas \n 7 - Salir")));

switch (opcion){
    case 1:
      total = grande * IVA;
      alert("El precio total es $" + total);
      let pedido;
      break;
    case 2: 
      total = mediano * IVA;
      mediano = alert("El precio total es $" + total);
      break;
    case 3:
      total = chico * IVA;
      chico = alert("El precio total es $" + total);
      break;
    case 4:
      total = bombones * IVA;
      bombones = alert("El precio total es $" + total);
      break;
    case 5:
      total = tortas * IVA;
      tortas = alert("El precio total es $" + total);
      break;
    case 6:
      bochas();
      break;
    case 7:
      alert("Muchas gracias por visitarnos.Te esperamos de vuelta!");
    break;
}

let pedido = parseInt(prompt("Quiere que se lo enviemos? Seleccione una opción\n 1 - Si, quiero que me lo envíen. \n 2 - Retiro por el local."))
if(pedido == 1){
  console.log(pedido);
  alert("En unos instantes le entregaremos su pedido. Muchas gracias por su compra!")
}
else(pedido == 2);{
  alert("Puede pasar a retirar su pedido cuando quiera.")
}

class datosEnvio {
  constructor(nombre, direccion, telefono){
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
  }
}

const pedido1 = new datosEnvio(
  prompt("Ingrese su nombre y apellido."),
  prompt("Ingrese la dirección de envío."),
  parseInt(prompt("Ingrese su numero de teléfono."))
)
















