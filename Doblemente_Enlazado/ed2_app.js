const ListaDoblementeEnlazada = require("./ed2_lista_Doble");

const ld = new ListaDoblementeEnlazada();

ld.agregarAlFinal("Edwin",21);
ld.agregarAlFinal("Carlos",25);
ld.agregarAlFinal("Fernanda",19);
ld.agregarAlFinal("Anna",30);

ld.mostrarAdelante();
ld.mostrarAtras();

ld.agregarAlInicio("Mario",22);
ld.mostrarAdelante();

ld.insertarEn(1, "Carolina", 34);
ld.mostrarAdelante();

ld.eliminar("Fernanda", 19);
ld.mostrarAdelante();

console.log("Posición de Anna", ld.buscar("Anna", 30));