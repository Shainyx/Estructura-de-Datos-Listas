class Nodo{
    constructor(nombre){
        this.nombre = nombre;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaCircularDoble{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(nom){
        const nodo = new Nodo(nom);

        if(!this.cabeza){
            this.cabeza = nodo;
            nodo.siguiente = nodo;
            nodo.anterior = nodo;
        }else{
            const ultimo = this.cabeza.anterior;

            ultimo.siguiente = nodo;
            nodo.anterior = ultimo;
            nodo.siguiente = this.cabeza;
            this.cabeza.anterior = nodo;
        }

    }

    mostrarAdelante(){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";

        do{
            resultado += actual.nombre + " ⇄ ";
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log(resultado + "(vuelve al inicio)");
    }

    mostrarAtras(){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza.anterior;
        let resultado = "";

        do{
            resultado += actual.nombre + " ⇄ ";
            actual = actual.anterior;
        }while(actual !== this.cabeza.anterior);

        console.log(resultado + "(vuelve al final)");
    }

    buscar(nom){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;

        do{
            if(actual.nombre == nom){
                console.log("La tarea "+nom+" esta dentro de la lista.");
                return;
            }
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log("No se encuentra la tarea dentro de la lista.")
    }

    contar(){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let contar = 0;

        do{
            contar++;
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log("La lista tiene "+contar+" nodos.")
    }

}

const lcd = new ListaCircularDoble();

lcd.agregarAlFinal("estudiar");
lcd.agregarAlFinal("comer");
lcd.agregarAlFinal("dormir");

lcd.mostrarAdelante();
lcd.mostrarAtras();

lcd.buscar("comer");
lcd.contar();
