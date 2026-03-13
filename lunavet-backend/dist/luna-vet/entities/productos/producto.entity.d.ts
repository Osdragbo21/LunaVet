import { Proveedor } from '../proveedores/proveedor.entity';
export declare class Producto {
    id_producto: number;
    proveedor_id: number;
    proveedor: Proveedor;
    nombre: string;
    categoria: string;
    precio_venta: number;
    precio_compra: number;
    stock_actual: number;
    stock_minimo: number;
}
