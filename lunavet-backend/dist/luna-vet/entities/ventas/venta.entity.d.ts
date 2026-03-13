import { Cliente } from '../clientes/cliente.entity';
import { Empleado } from '../empleados/empleado.entity';
export declare class Venta {
    id_venta: number;
    cliente_id: number;
    cliente: Cliente;
    empleado_id: number;
    empleado: Empleado;
    fecha_venta: Date;
    total: number;
    metodo_pago: string;
}
