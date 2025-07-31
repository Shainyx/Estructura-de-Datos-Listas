const Nodo = require("./ed2_nodo");

class ListaDoblementeEnlazada{
    constructor(){
        this.cabeza = null;
        this.cola = null;
    }

    agregarAlFinal(nom, ed){
        const nodo = new Nodo(nom, ed);

        if(!this.cabeza){
            this.cabeza = nodo;
            this.cola = nodo;
        }else{
            nodo.anterior = this.cola;
            this.cola.siguiente = nodo;
            this.cola = nodo;
        }
    }

    agregarAlInicio(nom, ed){
        const nodo = new Nodo(nom, ed);

        if(!this.cabeza){
            this.cabeza = nodo;
            this.cola = nodo;
        }else{
            nodo.siguiente = this.cabeza;
            this.cabeza.anterior = nodo;
            this.cabeza = nodo;
        }
    }

    eliminar(nom, ed){
        let actual = this.cabeza;

        while(actual){
            if(JSON.stringify(actual.nombre) === JSON.stringify(nom) && JSON.stringify(actual.edad) === JSON.stringify(ed)){
                if(actual === this.cabeza){
                    this.cabeza = actual.siguiente;
                    if(this.cabeza) this.cabeza.anterior = null;
                    else this.cola = null;
                }else if(actual === this.cola){
                    this.cola = actual.anterior;
                    this.cola.siguiente = null;
                }else{
                    actual.anterior.siguiente = actual.siguiente;
                    actual.siguiente.anterior = actual.anterior;
                }
                return;
            }
            actual = actual.siguiente;
        }
    }

    buscar(nom, ed){
        let actual = this.cabeza;
        let posicion = 0;

        while(actual){
            if(JSON.stringify(actual.nombre) === JSON.stringify(nom) 
                && JSON.stringify(actual.edad) === JSON.stringify(ed)){
                return posicion;
            }
            actual = actual.siguiente;
            posicion++;
        }
        return "Not found";
    }

    insertarEn(posicion, nom, ed){
        if(posicion < 0) return;

        const nodo = new Nodo(nom, ed);

        if(posicion === 0){
            this.agregarAlInicio(nom, ed);
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        while(actual && contador < posicion){
            actual = actual.siguiente;
            contador++;
        }

        if(!actual){
            this.agregarAlFinal(nom, ed);
            return;
        }

        nodo.anterior = actual.anterior;
        nodo.siguiente = actual;
        if(actual.anterior) actual.anterior.siguiente = nodo;
        actual.anterior = nodo;

    }


    mostrarAdelante(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual){
            resultado += actual.nombre + " " + actual.edad + " ⇄ ";
            actual = actual.siguiente;
        }
        console.log(resultado + "null");

    }

    mostrarAtras(){
        let actual = this.cola;
        let resultado = "";

        while(actual){
            resultado += actual.nombre + " "+ actual.edad + " ⇄ ";
            actual = actual.anterior;
        }
        console.log(resultado + "null");
    }
}

module.exports = ListaDoblementeEnlazada;