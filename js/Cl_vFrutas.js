export default class Cl_vFrutas {
    constructor() {
        this.inCodigo = document.getElementById("frutasForm_inCodigo");
        this.inEnvase = document.getElementById("frutasForm_inEnvase");
        this.inCosto = document.getElementById("frutasForm_inCosto");
        this.inExtraSI = document.getElementById("frutasForm_inExtraSi");
        this.inExtraNO = document.getElementById("frutasForm_inExtraNo");
        this.btProcesar = document.getElementById("frutasForm_btProcesar");
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get envase() {
        return this.inEnvase.value;
    }
    get costo() {
        return +this.inCosto.value;
    }
    get extra() {
       if(this.inExtraSI.checked === true){
           return this.inExtraSI.value;
       }
       if(this.inExtraNO.checked === true){
           return this.inExtraNO.value;
       }
    }
}