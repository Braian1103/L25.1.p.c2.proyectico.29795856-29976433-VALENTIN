export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarFlores() {
        this.modelo.procesarRamos(this.vista.agregarFlores());
        this.vista.reportarFlores(
            this.modelo.totalPagados(),
            this.modelo.floresNaturales(),
            this.modelo.floresNaturalesEnvaseMediano(),
            this.modelo.porcentajeFloresNaturales(),
            this.modelo.ventaTotalflores(),
            this.modelo.ventaTotalfrutas()
        );
    }
    procesarFrutas() {
        this.modelo.procesarRamos(this.vista.agregarFrutas());
        this.vista.reportarFrutas(
            this.modelo.totalPagados(),
            this.modelo.floresNaturales(),
            this.modelo.floresNaturalesEnvaseMediano(),
            this.modelo.porcentajeFloresNaturales(),
            this.modelo.ventaTotalflores(),
            this.modelo.ventaTotalfrutas()
        )
    }
}