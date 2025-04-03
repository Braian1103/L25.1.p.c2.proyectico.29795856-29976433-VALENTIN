export default class Cl_mRamo {
    constructor({ codigo, envase, costo }) {
        this.codigo = codigo;
        this.envase = envase;
        this.costo = costo;
    }
    set codigo(c) {
        this._codigo = c;
    }
    get codigo() {
        return this._codigo;
    }
    set envase(e) {
        this._envase = e;
    }
    get envase() {
        return this._envase;
    }
    set costo(o) {
        this._costo = o;
    }
    get costo() {
        return this._costo;
    }
    descuento() {
        return 0
    }
    incremento() {
        return 0
    }
    precio() {
        return (this.costo - this.descuento() + this.incremento());
    }
}