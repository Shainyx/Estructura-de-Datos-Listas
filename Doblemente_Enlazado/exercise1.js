class Nodo{
    constructor(nombre){
        this.nombre = nombre;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoblemteEnlazado{
    constructor(){
        this.cabeza = null;
        this.cola = null;
    }

    agregarAlFinal(nom){
        const nodo = new Nodo(nom);

        if(!this.cabeza){
            this.cabeza = nodo;
            this.cola = nodo;
        }else{
            nodo.anterior = this.cola;
            this.cola.siguiente = nodo;
            this.cola = nodo;
        }
    }

    mostrarAdelante(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual){
            resultado += actual.nombre + " ⇄ ";
            actual = actual.siguiente;
        }
        console.log(resultado + "null");
    }

    mostrarAtras(){
        let actual = this.cola;
        let resultado = "";

        while(actual){
            resultado += actual.nombre + " ⇄ ";
            actual = actual.anterior;
        }
        console.log(resultado + "null");
    }

    mostrarPorNombre(nom){
        let actual = this.cabeza;
        let encontrado = "";

        while(actual){
            if(actual.nombre == nom){
                encontrado += "Una de las tareas pendientes es "+ actual.nombre;
                return console.log(encontrado);
            }else{
                actual = actual.siguiente;
            }
        }

        if(encontrado == ""){
            console.log("No se encontró esa tarea dentro de la lista");
       }
    }

    contarLista(){
        let actual = this.cabeza;
        let cont = 0;

        while(actual !== null){
            cont++;
            actual = actual.siguiente;
        }
        console.log(cont);
    }

}

const lito0 = new ListaDoblemteEnlazado();
lito0.agregarAlFinal("bañarse");
lito0.agregarAlFinal("ordenar");
lito0.agregarAlFinal("realizar tarea");
lito0.agregarAlFinal("estudiar");

lito0.mostrarPorNombre("estudiar");
lito0.contarLista();

