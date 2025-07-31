class Nodo{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(nom, ape){
        const nodo = new Nodo(nom, ape);

        if(this.cabeza == null){
            this.cabeza = nodo;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente !== null){
                actual = actual.siguiente;
            }
            actual.siguiente = nodo;
        }
    }

    agregarAlInicio(nom,ape){
        const nodo = new Nodo(nom, ape);

        nodo.siguiente = this.cabeza;
        this.cabeza = nodo;
    }

    eliminar(nom, ape){
        if(this.cabeza === null) return;
        if(this.cabeza.nombre === nom && this.cabeza.apellido === ape){
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let actual = this.cabeza;
        while(actual.siguiente !== null && actual.siguiente.nombre !== nom && actual.siguiente.apellido !== ape){
            actual = actual.siguiente;
        }

        if(actual.siguiente !== null){
            actual.siguiente = actual.siguiente.siguiente;
        }
    }

    buscar(nom){
        let actual = this.cabeza;
        let posicion = 0;

        while(actual !== null){
            if(actual.nombre === nom){
                return posicion;
            }
            actual = actual.siguiente;
            posicion++;
        }
        return "Not found";
    }

    insertarEn(posicion, nom, ape){
        if(posicion < 0) return;

        const nodo = new Nodo(nom, ape);

        if(posicion === 0){
            nodo.siguiente = this.cabeza;
            this.cabeza = nodo;
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        while(actual !== null && contador < posicion - 1){
            actual = actual.siguiente;
            contador++;
        }

        if(actual === null){
            console.log("Posición fuera de rango");
            return;
        }

        nodo.siguiente = actual.siguiente;
        actual.siguiente = nodo;
    }

    mostrar(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual !== null){
            resultado += actual.nombre +" "+ actual.apellido + " -> ";
            actual = actual.siguiente;
        }

        resultado += "null";
        console.log(resultado);
    }

}

const lse = new ListaEnlazada();
lse.agregarAlFinal("Edwin", "Oro");
lse.agregarAlFinal("Mariana", "Chavez");
lse.agregarAlFinal("Jose", "Martinez");
lse.agregarAlFinal("Alejandra", "Fernandez");
lse.mostrar();

lse.agregarAlInicio("Margarita","Esquives");
lse.mostrar();

lse.insertarEn(3, "Dariel", "Gonzales");
lse.mostrar();

lse.eliminar("Mariana","Chavez");
lse.mostrar();

console.log("Posición de Jose: ",lse.buscar("Jose"));
console.log("Posición de Alejandra: ",lse.buscar("Alejandra"));