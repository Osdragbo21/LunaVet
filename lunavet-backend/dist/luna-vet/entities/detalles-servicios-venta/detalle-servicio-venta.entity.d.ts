import { Venta } from '../ventas/venta.entity';
import { Servicio } from '../servicios/servicio.entity';
export declare class DetalleServicioVenta {
    id_det_ser: number;
    venta_id: number;
    venta: Venta;
    servicio_id: number;
    servicio: Servicio;
    costo_aplicado: number;
}
