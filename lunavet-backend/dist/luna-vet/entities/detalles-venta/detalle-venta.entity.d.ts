import { Venta } from '../ventas/venta.entity';
import { Producto } from '../productos/producto.entity';
export declare class DetalleVenta {
    id_detalle: number;
    venta_id: number;
    venta: Venta;
    producto_id: number;
    producto: Producto;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
}
