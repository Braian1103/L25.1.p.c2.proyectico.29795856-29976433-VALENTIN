import Cl_mRamo from "./Cl_mRamo.js"
export default class Cl_mFrutas extends Cl_mRamo {
    constructor({ codigo, envase, costo, extra }) {
        super({ codigo, envase, costo })
        this.extra = extra;
    }
    set extra(e) {
        this._extra = e;
    }
    get extra() {
        return this._extra;
    }
    descuento() {
        if (this.extra == "SI") {
            return this.costo * 0.15
        } else if (this.extra == "NO") {
            return 0
        }
    }

}