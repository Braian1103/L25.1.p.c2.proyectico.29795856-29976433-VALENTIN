export default class Cl_vFlores {
    constructor(){
        this.inCodigo = document.getElementById("floresForm_inCodigo");
        this.inEnvase = document.getElementById("floresForm_inEnvase");
        this.inCosto = document.getElementById("floresForm_inCosto");
        this.inTipoA = document.getElementById("floresForm_inTipoA");
        this.inTipoN = document.getElementById("floresForm_inTipoN");
        this.btProcesar = document.getElementById("floresForm_btProcesar");
    }
    get codigo(){
        return this.inCodigo.value;
    }
    get envase(){
        return this.inEnvase.value;
    }
    get costo(){
        return +this.inCosto.value;
    }
    get tipo(){
        if(this.inTipoA.checked === true){
            return this.inTipoA.value;
        }
        if(this.inTipoN.checked === true){
            return this.inTipoN.value;
        }
    }
}