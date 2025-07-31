const Nodo = require("./cs2_nodo");

class ListaCircularSimple{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(ps, tl){
        const nodo = new Nodo(ps, tl);

        if(!this.cabeza){
            this.cabeza = nodo;
            nodo.siguiente = this.cabeza;
        }else{
            let actual = this.cabeza;

            while(actual.siguiente !== this.cabeza){
                actual = actual.siguiente;
            }

            actual.siguiente = nodo;
            nodo.siguiente = this.cabeza;

        }
    }

    agregarAlInicio(ps, tl){
        const nodo = new Nodo(ps, tl);
        
        if(!this.cabeza){
            this.cabeza = nodo;
            nodo.siguiente = nodo;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente !== this.cabeza){
                actual = actual.siguiente;
            }

            nodo.siguiente = this.cabeza;
            actual.siguiente = nodo;
            this.cabeza = nodo;
        }      
    }

    eliminar(ps, tl){
        if(this.cabeza === null) return;
        if(this.cabeza.peso === ps && this.cabeza.talla === tl){
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let actual = this.cabeza;
        while(actual.siguiente !== this.cabeza && 
                actual.siguiente.peso !== ps && actual.siguiente.talla !== tl){
            actual = actual.siguiente;
        }

        if(actual.siguiente !== this.cabeza){
            actual.siguiente = actual.siguiente.siguiente;
        }
    }

    buscar(ps, tl){
        let actual = this.cabeza;
        let posicion = 0;

        do{
            if(actual.peso === ps && actual.talla === tl){
                return posicion;
            }
            actual = actual.siguiente;
            posicion++;
        }while(actual !== this.cabeza);

        return "Not Found";
    }

    insertarEn(posicion, ps, tl){
        if(posicion < 0) return;

        const nodo = new Nodo(ps, tl);
        if(posicion === 0){
            this.agregarAlInicio(ps, tl);
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        do{
            actual = actual.siguiente;
            contador++;
        }while(actual !== this.cabeza && contador < posicion -1);

        if(actual === this.cabeza){
            console.log("Posición fuera de rango");
            return;
        }

        nodo.siguiente = actual.siguiente;
        actual.siguiente = nodo;
    }

    mostrar(){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";

        do{
            resultado += actual.peso + " " + actual.talla + " -> ";
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log(resultado + "(vuelve al incio)");
    
    }

}

module.exports = ListaCircularSimple;