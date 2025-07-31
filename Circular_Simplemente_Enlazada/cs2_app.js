const ListaCircularSimple = require("./cs2_circular_Simple");

const cs = new ListaCircularSimple();

cs.agregarAlFinal(90, 1.7);
cs.agregarAlFinal(91, 1.5);
cs.agregarAlFinal(2, 1.6);
cs.agregarAlFinal(93, 1.8);
cs.mostrar();

cs.agregarAlInicio(50, 1.9);
cs.mostrar();

cs.insertarEn(3, 85, 1.65);
cs.mostrar();

cs.eliminar(90, 1.7);
cs.mostrar();

console.log("Posición: ",cs.buscar(93, 1.8));
console.log("Posición de peso: 50, talla: 1.9 -> ",cs.buscar(50, 1.9));