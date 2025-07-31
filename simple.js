class Nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(dato){
        const nuevoNodo = new Nodo(dato);

        if(this.cabeza == null){
            this.cabeza = nuevoNodo;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente !== null){
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }

    }

    agregarAlInicio(dato){
        const nuevoNodo = new Nodo(dato);

        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
    }

    eliminar(dato){
        if(this.cabeza === null) return;
        if(this.cabeza.dato === dato){
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let actual = this.cabeza;
        while(actual.siguiente !== null && actual.siguiente.dato !== dato){
            actual = actual.siguiente;
        }

        if(actual.siguiente !== null){
            actual.siguiente = actual.siguiente.siguiente;
        }

    }

    buscar(dato){
        let actual = this.cabeza;
        let posicion = 0;

        while(actual !== null){
            if(actual.dato === dato){
                return posicion;
            }
            actual = actual.siguiente;
            posicion++;
        }

        return "Not found";
    }

    insertarEn(posicion, dato){
        if(posicion < 0) return;

        const nuevoNodo = new Nodo(dato);

        if(posicion === 0){
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        while (actual !== null && contador < posicion - 1) {
            actual = actual.siguiente;
            contador++;
        }

        if (actual === null) {
            console.log("Posición fuera de rango");
            return;
        }

        nuevoNodo.siguiente = actual.siguiente;
        actual.siguiente = nuevoNodo;
    }


    mostrar(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual !== null){
            resultado += actual.dato + " -> ";
            actual = actual.siguiente;
        }

        resultado += "null";
        console.log(resultado);
    }
}

const lista = new ListaEnlazada();
lista.agregarAlFinal(30);
lista.agregarAlFinal(20);
lista.agregarAlFinal(60);
lista.mostrar(); // 30 -> 20 -> 60 -> null

lista.agregarAlInicio(10);
lista.mostrar(); // 10 -> 30 -> 20 -> 60 -> null

lista.insertarEn(2, 99);
lista.mostrar(); // 10 -> 30 -> 99 -> 20 -> 60 -> null

lista.eliminar(30);
lista.mostrar(); // 10 -> 99 -> 20 -> 60 -> null

console.log("Posición de 99:", lista.buscar(99)); // Posición de 99: 1
console.log("Posición de 40:", lista.buscar(40)); // Posición de 40: -1