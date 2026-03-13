import { Repository } from 'typeorm';
import { DetalleServicioVenta } from '../../entities/detalles-servicios-venta/detalle-servicio-venta.entity';
import { CreateDetalleServicioVentaInput } from '../../dtos/detalleServicioVenta/create-detalle-servicio-venta.input';
export declare class DetalleServicioVentaService {
    private rep;
    constructor(rep: Repository<DetalleServicioVenta>);
    findAll(): Promise<DetalleServicioVenta[]>;
    create(input: CreateDetalleServicioVentaInput): Promise<DetalleServicioVenta>;
}
