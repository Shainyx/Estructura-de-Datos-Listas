const ListaEnlazada = require("./es2_lista_Simple");

const lse = new ListaEnlazada();
lse.agregarAlFinal("Edwin", "Oro");
lse.agregarAlFinal("Mariana", "Chavez");
lse.agregarAlFinal("Jose", "Martinez");
lse.agregarAlFinal("Alejandra", "Fernandez");
lse.mostrar();

lse.agregarAlInicio("Margarita","Esquives");
lse.mostrar();

lse.insertarEn(3, "Gabriel", "Gonzales");
lse.mostrar();

lse.eliminar("Mariana","Chavez");
lse.mostrar();

console.log("Posición de Jose: ",lse.buscar("Jose"));
console.log("Posición de Alejandra: ",lse.buscar("Alejandra"));