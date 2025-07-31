class Nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoblementeEnlazada{
    constructor(){
        this.cabeza = null;
        this.cola = null;
    }

    agregarAlFinal(dato){
        const nuevoNodo = new Nodo(dato);
        
        if(!this.cabeza){
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        }else{
            nuevoNodo.anterior = this.cola;
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }
    }

    agregarAlInicio(dato){
        const nuevoNodo = new Nodo(dato);

        if(!this.cabeza){
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        }else{
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza.anterior = nuevoNodo;
            this.cabeza = nuevoNodo;
        }
    }

    eliminar(dato){
        let actual = this.cabeza;

        while(actual){
            if(JSON.stringify(actual.dato) === JSON.stringify(dato)){
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

    buscar(dato){
        let actual = this.cabeza;
        let posicion = 0;

        while(actual){
            if(JSON.stringify(actual.dato) === JSON.stringify(dato)){
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
            this.agregarAlInicio(dato);
            return;
        }

        let actual = this.cabeza;
        let contador = 0;

        while(actual && contador < posicion){
            actual = actual.siguiente;
            contador++;
        }

        if(!actual){
            this.agregarAlFinal(dato);
            return;
        }

        nuevoNodo.anterior = actual.anterior;
        nuevoNodo.siguiente = actual;
        if(actual.anterior) actual.anterior.siguiente = nuevoNodo;
        actual.anterior = nuevoNodo;

    }

    mostrarAdelante(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual){
            resultado += actual.dato + " ⇄ ";
            actual = actual.siguiente;
        }
        console.log(resultado + "null");
    }

    mostrarAtras(){

        let actual = this.cola;
        let resultado = "";

        while(actual){
            resultado += actual.dato + " ⇄ ";
            actual = actual.anterior;
        }
        console.log(resultado + "null");
    }

}



const lista = new ListaDoblementeEnlazada();

lista.agregarAlFinal([1, 2, 3]);
lista.agregarAlFinal([6, 7, 8]);
lista.agregarAlFinal([10, 20, 30]);

lista.mostrarAdelante(); // [1,2,3] ⇄ [6,7,8] ⇄ [10,20,30] ⇄ null
lista.mostrarAtras();    // [10,20,30] ⇄ [6,7,8] ⇄ [1,2,3] ⇄ null

lista.agregarAlInicio([0]);
lista.mostrarAdelante(); // [0] ⇄ [1,2,3] ⇄ ...

lista.insertarEn(2, [100]);
lista.mostrarAdelante(); // [0] ⇄ [1,2,3] ⇄ [100] ⇄ ...

lista.eliminar([6, 7, 8]);
lista.mostrarAdelante(); // [0] ⇄ [1,2,3] ⇄ [100] ⇄ [10,20,30] ⇄ null

console.log("Posición de [100]:", lista.buscar([100])); // 2