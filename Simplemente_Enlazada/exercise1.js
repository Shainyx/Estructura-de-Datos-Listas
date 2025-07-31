class Nodo{
    constructor(nombre){
        this.nombre = nombre;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null;
    }

    agregarFinal(tarea){
        const nodito = new Nodo(tarea);

        if(this.cabeza == null){
            this.cabeza = nodito;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente !== null){
                actual = actual.siguiente;
            }
            actual.siguiente = nodito;
        }
    }


    mostrar(){
        let actual = this.cabeza;
        let resultado = "";

        while(actual !== null){
            resultado += actual.nombre + " -> ";
            actual = actual.siguiente;
        }

        resultado += "null";
        console.log(resultado);
    }

    buscarPorNombre(nom){
        let actual = this.cabeza;
        let encontrado = "";

        while(actual !== null){
            if(actual.nombre == nom){
                encontrado += "Una de las tareas pendientes es "+ actual.nombre;
                actual = actual.siguiente;

            }else{
                actual = actual.siguiente;
            }
        }

        if(encontrado == ""){
            console.log("No se encontró esa tarea dentro de la lista");
        }else{
            console.log(encontrado);
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


const lito = new ListaEnlazada();
lito.agregarFinal("barrer");
lito.agregarFinal("cocinar");
lito.agregarFinal("planchar");
lito.buscarPorNombre("cocinar");
lito.contarLista();

