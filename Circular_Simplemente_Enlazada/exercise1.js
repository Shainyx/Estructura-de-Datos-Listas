class Nodo{
    constructor(nombre){
        this.nombre = nombre;
        this.siguiente = null;
    }
}


class ListaCircularSimple{
    constructor(){
        this.cabeza = null;
    }

    agregarAlFinal(nom){
        const nodo = new Nodo(nom);

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


    mostrar(){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;
        let resultado = "";


        do {
            resultado += actual.nombre + " -> ";
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log(resultado + "(Vuelve al inicio)");
    }


    buscar(nom){
        if(!this.cabeza){
            console.log("Lista vacía");
            return;
        }

        let actual = this.cabeza;

        do {
            if(actual.nombre == nom){
                console.log("La tarea "+nom+" esta dentro de la lista.")
                return;
            }
                actual = actual.siguiente;
            
        }while(actual !== this.cabeza);

        console.log("No se encontró esa tarea dentro de la lista.");
    }

    contar(){
        if(!this.cabeza){
            console.log("0");
            return;
        }

        let actual = this.cabeza;
        let contar = 0;


        do {
            contar++;
            actual = actual.siguiente;
        }while(actual !== this.cabeza);

        console.log("La lista tiene "+contar+" datos.");
    }

}

const lcs1 = new ListaCircularSimple();

lcs1.agregarAlFinal("despertar");
lcs1.agregarAlFinal("ducharse");
lcs1.agregarAlFinal("desayunar");

lcs1.mostrar();

lcs1.buscar("ducharse");

lcs1.contar();

