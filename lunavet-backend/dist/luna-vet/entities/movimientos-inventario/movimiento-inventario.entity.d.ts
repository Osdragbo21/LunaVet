import { Producto } from '../productos/producto.entity';
import { Empleado } from '../empleados/empleado.entity';
export declare class MovimientoInventario {
    id_movimiento: number;
    producto_id: number;
    producto: Producto;
    empleado_id: number;
    empleado: Empleado;
    tipo_movimiento: string;
    cantidad: number;
    motivo: string;
    fecha: Date;
}
