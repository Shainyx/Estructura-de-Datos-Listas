class Nodo{
    constructor(espanol, english){
        this.espanol = espanol;
        this.english = english;
        this.siguente = null;
        this.anterior = null;
    }
}

module.exports = Nodo;