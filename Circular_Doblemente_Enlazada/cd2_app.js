const ListaCircularDoble = require("./cd2_circular_doble");
const cd = new ListaCircularDoble();

cd.agregarAlFinal("es: Manzana", "en: Apple");
cd.agregarAlInicio("es: Carro", "en: Car");
cd.insertarEn(1, "es: Libro", "en: Book");

cd.mostrarAdelante();
cd.mostrarAtras();

console.log("Posición de 'Carro', 'Car':", cd.buscar("es: Carro", "en: Car"));
console.log("Cantidad de elementos:", cd.contar());

cd.eliminar("es: Manzana", "en: Apple");
cd.mostrarAdelante();
