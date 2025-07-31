class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaCircularDoble {
    constructor() {
        this.cabeza = null;
    }

    agregarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);

        if (!this.cabeza) {
            // Primer nodo: se apunta a sí mismo en ambos sentidos
            this.cabeza = nuevoNodo;
            nuevoNodo.siguiente = nuevoNodo;
            nuevoNodo.anterior = nuevoNodo;
        } else {
            const ultimo = this.cabeza.anterior;

            // Conexiones hacia adelante y atrás
            ultimo.siguiente = nuevoNodo;
            nuevoNodo.anterior = ultimo;
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza.anterior = nuevoNodo;
        }
    }

    mostrarAdelante() {
        if (!this.cabeza) {
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";

        do {
            resultado += actual.dato + " ⇄ ";
            actual = actual.siguiente;
        } while (actual !== this.cabeza);

        console.log(resultado + "(vuelve al inicio)");
    }

    mostrarAtras() {
        if (!this.cabeza) {
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza.anterior;
        let resultado = "";

        do {
            resultado += actual.dato + " ⇄ ";
            actual = actual.anterior;
        } while (actual !== this.cabeza.anterior);

        console.log(resultado + "(vuelve al final)");
    }
}

const lista = new ListaCircularDoble();

lista.agregarAlFinal(10);
lista.agregarAlFinal(20);
lista.agregarAlFinal(30);

lista.mostrarAdelante(); // 10 ⇄ 20 ⇄ 30 ⇄ (vuelve al inicio)
lista.mostrarAtras();    // 30 ⇄ 20 ⇄ 10 ⇄ (vuelve al final)
