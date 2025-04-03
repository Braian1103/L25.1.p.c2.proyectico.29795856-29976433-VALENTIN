import Cl_mFlores from"./Cl_mFlores.js"
import Cl_mFrutas from"./Cl_mFrutas.js"
import Cl_vFlores from"./Cl_vFlores.js"
import Cl_vFrutas from "./Cl_vFrutas.js"

export default class Cl_vTienda{
    constructor(){
        this.controlador = null;
        this.mFlores = null;
        this.mFrutas = null;
        this.tablaFlores = document.getElementById("mainForm_tablaFlores");
        this.tablaFrutas = document.getElementById("mainForm_tablaFrutas");
        this.lblTotalPagado = document.getElementById("mainForm_lblTotalPagados");
        this.lblfloresNaturales = document.getElementById("mainForm_lblfloresNaturales");
        this.lblfloresNaturalesEnvaseMediano = document.getElementById("mainForm_lblfloresNaturalesEnvaseMediano");
        this.lblporcentajeFloresNaturales = document.getElementById("mainForm_lblporcentajeFloresNaturales");
        this.lblventaTotalflores = document.getElementById("mainForm_lblventaTotalflores");
        this.lblventaTotalfrutas = document.getElementById("mainForm_lblventaTotalfrutas");
        this.vFlores = new Cl_vFlores();
        this.vFrutas = new Cl_vFrutas();
        this.vFlores.btProcesar.onclick = () => this.controlador.procesarFlores();
        this.vFrutas.btProcesar.onclick = () => this.controlador.procesarFrutas();
    }
    agregarFlores(){
        this.mFlores = new Cl_mFlores({ codigo: this.vFlores.codigo,
            envase: this.vFlores.envase,
            costo: this.vFlores.costo,
            tipo: this.vFlores.tipo
        });
        return this.mFlores;
    }
    agregarFrutas(){
        this.mFrutas = new Cl_mFrutas({ codigo: this.vFrutas.codigo,
            envase: this.vFrutas.envase,
            costo: this.vFrutas.costo,
            extra: this.vFrutas.extra
        });
        return this.mFrutas;
    }
    reportarFlores(TotalPagado, floresNaturales,
        floresNaturalesEnvaseMediano, porcentajeFloresNaturales, ventaTotalflores, ventaTotalfrutas){
        this.tablaFlores.innerHTML += `<tr>
                                        <td>${this.mFlores.codigo}</td>
                                        <td>${this.mFlores.envase}</td>
                                        <td>${this.mFlores.costo.toFixed(2)}$</td>
                                        <td>${this.mFlores.tipo}</td>
                                        <td>${this.mFlores.descuento().toFixed(2)}$</td>
                                        <td>${this.mFlores.incremento().toFixed(2)}$</td>
                                        <td>${this.mFlores.precio().toFixed(2)}$</td>
                                    </tr>`
        this.lblTotalPagado.innerHTML = TotalPagado;
        this.lblfloresNaturales.innerHTML = floresNaturales;
        this.lblfloresNaturalesEnvaseMediano.innerHTML = floresNaturalesEnvaseMediano;
        this.lblporcentajeFloresNaturales.innerHTML = porcentajeFloresNaturales;
        this.lblventaTotalflores.innerHTML = ventaTotalflores;
        this.lblventaTotalfrutas.innerHTML = ventaTotalfrutas;
        floresForm.hidden = true;
        ramoForm.hidden = false;
    }
    reportarFrutas(TotalPagado, floresNaturales,
        floresNaturalesEnvaseMediano, porcentajeFloresNaturales, ventaTotalflores, ventaTotalfrutas){
        this.tablaFrutas.innerHTML += `<tr>
                                        <td>${this.mFrutas.codigo}</td>
                                        <td>${this.mFrutas.envase}</td>
                                        <td>${this.mFrutas.costo.toFixed(2)}$</td>
                                        <td>${this.mFrutas.extra}</td>
                                        <td>${this.mFrutas.descuento().toFixed(2)}$</td>
                                        <td>${this.mFrutas.precio().toFixed(2)}$</td>
                                    </tr>`
        this.lblTotalPagado.innerHTML = TotalPagado;
        this.lblfloresNaturales.innerHTML = floresNaturales;
        this.lblfloresNaturalesEnvaseMediano.innerHTML = floresNaturalesEnvaseMediano;
        this.lblporcentajeFloresNaturales.innerHTML = porcentajeFloresNaturales;
        this.lblventaTotalflores.innerHTML = ventaTotalflores;
        this.lblventaTotalfrutas.innerHTML = ventaTotalfrutas;
        frutasForm.hidden = true;
        ramoForm.hidden = false;
    }
}