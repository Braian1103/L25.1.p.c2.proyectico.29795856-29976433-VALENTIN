import Cl_mRamo from "./Cl_mRamo.js"

export default class Cl_mFlores extends Cl_mRamo {
    constructor({ codigo, envase, costo, tipo }) {
        super({ codigo, envase, costo })
        this.tipo = tipo;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    descuento() {
        return this.tipo == "A" ? this.costo * 0.1 : 0
    }
    incremento() {
        if (this.tipo == "N") {
            return (this.costo * 0.08) 
        } else {
            return 0
        }
    }
   
}