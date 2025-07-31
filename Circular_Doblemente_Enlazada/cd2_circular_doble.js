const Nodo = require("./cd2_nodo");

class ListaCircularDoble{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(es, en){
        const nodo = new Nodo(es, en);

        if(!this.cabeza){
            this.cabeza = nodo;
            nodo.siguiente = nodo;
            nodo.anterior = nodo;
        }else{
            const ultimo = this.cabeza.anterior;

            ultimo.siguiente = nodo;
            nodo.anterior = ultimo;
            nodo.siguente = this.cabeza;
            this.cabeza.anterior = nodo;
        }
    }

    agregarAlInicio(es, en){
        const nodo = new Nodo(es, en);

        if(!this.cabeza){
            this.cabeza = nodo;
            nodo.siguiente = nodo;
            nodo.anterior = nodo;
        }else{
            const ultimo = this.cabeza.anterior;

            nodo.siguente = this.cabeza;
            nodo.anterior = ultimo;
            this.cabeza.anterior = nodo;
            ultimo.siguente = nodo;
            this.cabeza = nodo;

        }
    }

    eliminar(es, en){
        if(!this.cabeza) return;

        let actual = this.cabeza;
        
        do{
            if(actual.espanol === es && actual.english === en){
                if(actual === this.cabeza && actual.siguente === this.cabeza){
                    this.cabeza = null; // When there is a node
                }else{
                    actual.anterior.siguente = actual.siguiente;
                    actual.siguiente.anterior = actual.anterior;

                    if(actual === this.cabeza){
                        this.cabeza = actual.siguente;
                    }
                }
                return;
            }
            actual = actual.siguente;
        }while(actual !== this.cabeza);
    }

    insertarEn(posicion, es, en){
        if(posicion < 0) return;

        if(!this.cabeza || posicion === 0){
            this.agregarAlInicio(es, en);
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        do{
            if(contador === posicion) break;
            actual = actual.siguente;
            contador++;
        }while(actual !== this.cabeza);


        if(contador !== posicion){
            this.agregarAlFinal(es, en);
            return;
        }

        const nodo = new Nodo(es, en);
        const anterior = actual.anterior;

        nodo.siguente = actual;
        nodo.anterior = anterior;
        anterior.siguente = nodo;
        actual.siguiente = nodo;

    }

    mostrarAdelante(){
        if(!this.cabeza){
            console.log("empty list");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";

        do{
            resultado += actual.espanol + " "+ actual.english + " ⇄ ";
            actual = actual.siguente;
        }while(actual !== this.cabeza);

        console.log(resultado + "(Vuelve al inicio)");
    }

    mostrarAtras(){
        if(!this.cabeza){
            console.log("empty list");
            return;
        }

        let actual = this.cabeza.anterior;
        let resultado = "";

        do{
            resultado += actual.espanol + " "+ actual.english + " ⇄ ";
            actual = actual.anterior;
        }while(actual !== this.cabeza.anterior);
        
        console.log(resultado + "(Vuelve al final)");
    }

    buscar(es, en){
        if(!this.cabeza) return "Not there nodes";

        let actual = this.cabeza;
        let posicion = 0;
        
        do{
            if(actual.espanol === es && actual.english === en){
                return posicion;
            }
            actual = actual.siguente;
            posicion++;
        }while(actual !== this.cabeza);

        return "Not found";
    }

    contar(){
        if(!this.cabeza) return 0;

        let actual = this.cabeza;
        let contador = 0;
        
        do{
            contador++;
            actual = actual.siguente;
        } while(actual !== this.cabeza);

        return contador;
    }
}

module.exports = ListaCircularDoble;