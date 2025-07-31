class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaCircularSimple {
    constructor() {
        this.cabeza = null;
    }

    // Agregar al final
    agregarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            nuevoNodo.siguiente = this.cabeza; // Apunta a sí mismo
        } else {
            let actual = this.cabeza;

            // Buscar el último nodo (el que apunta a la cabeza)
            while (actual.siguiente !== this.cabeza) {
                actual = actual.siguiente;
            }

            actual.siguiente = nuevoNodo;
            nuevoNodo.siguiente = this.cabeza; // Conecta de nuevo al inicio
        }
    }

    // Mostrar la lista (una vuelta)
    mostrar() {
        if (!this.cabeza) {
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";

        do {
            resultado += actual.dato + " -> ";
            actual = actual.siguiente;
        } while (actual !== this.cabeza);

        console.log(resultado + "(vuelve al inicio)");
    }
}

const lista = new ListaCircularSimple();

lista.agregarAlFinal(1);
lista.agregarAlFinal(2);
lista.agregarAlFinal(3);

lista.mostrar();
// Salida: 1 -> 2 -> 3 -> (vuelve al inicio)
