class Nodo{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.siguiente = null;
        this.anterior = null;
    }
}

module.exports = Nodo;