/*La Tienda “Exprésalo con Amor” C.A, ofrece para el día de los enamorados, los más 
hermosos ramos de flores y frutas. Se conoce cada ramo: su código, envase (1 Pequeño, 2 
Mediano, 3 Grande) y costo neto. Además, se sabe que si el ramo es de flores tendrá un tipo 
(N- Natural o A-Artificial), teniendo en cuenta si artificial tendrá un descuento del 10% sobre el 
costo neto y si las flores son naturales tendrá un incremento del 8%. Por otro lado, si el ramo es 
de fruta se debe tomar en cuenta si el mismo lleva chocolate o botella de vino (cualquiera de los 
dos), de ser así este tendrá un descuento del 15% sobre el costo neto. La Tienda requiere 
determinar al final de su jornada laboral: el total vendido y el porcentaje de ramos de flores 
naturales con envase mediano vendidos. 
codigo envase costo   tipo  descuento() incremento() precio()
  22     2   100,00$   A     $10,00       $0,00      $90,00
  11     3   50,00 $   A     $5,00        $0,00      $45,00
  55     1   150,00 $  N     $0,00        $12,00     $162,00
  88     2   200,00 $  N     $0,00        $16,00     $216,00
Total                                                $513,00

codigo envase   costo   extra  descuento()  precio()
44      2    100,00 $   SI      $15,00      $85,00
33      3    50,00 $    NO      $0,00       $50,00
77      2    200,00 $   NO      $0,00       $200,00
44      1    150,00 $   SI      $22,50      $127,50
Total                                       $462,50
*/

import Cl_vTienda from "./Cl_vTienda.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_Principal{
  constructor(){
    this.modelo = new Cl_mTienda();
    this.vista = new Cl_vTienda();
    this.controlador = new Cl_controlador(this.modelo, this.vista);
    this.vista.controlador = this.controlador;
  }
}