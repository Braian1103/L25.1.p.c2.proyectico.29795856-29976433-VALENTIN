import Cl_mFlores from "./Cl_mFlores.js";
export default class Cl_mTienda {
    constructor() {
        this.totalFlores = 0;
        this.totalVentas = 0;
        this.totalFrutas = 0;
        this.cfloresNaturales = 0;
        this.canFlores = 0;
        this.cenvaseMediano = 0;
    }
    procesarRamos(c) {
        this.totalVentas += c.precio();  
        if (c instanceof Cl_mFlores) {
            this.totalFlores += c.precio();
            if (c.tipo == "N")
                this.cfloresNaturales++
        } else{
            this.totalFrutas += c.precio();
        }
        if ((c.envase == 2) && (c.tipo == "N")) {
            this.cenvaseMediano++
        }
        
    }
    totalPagados() {
        return this.totalVentas;
    }
    floresNaturales() {
        return this.cfloresNaturales;
    }
    floresNaturalesEnvaseMediano() {
        return this.cenvaseMediano;
    }
    porcentajeFloresNaturales() {
        return (this.cenvaseMediano / this.cfloresNaturales) * 100
    }
    ventaTotalflores(){
        return this.totalFlores;
    }
    ventaTotalfrutas(){
        return this.totalFrutas;
    }
}