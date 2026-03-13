import { Repository } from 'typeorm';
import { DetalleVenta } from '../../entities/detalles-venta/detalle-venta.entity';
import { CreateDetalleVentaInput } from '../../dtos/detalleVenta/create-detalle-venta.input';
export declare class DetalleVentaService {
    private rep;
    constructor(rep: Repository<DetalleVenta>);
    findAll(): Promise<DetalleVenta[]>;
    create(input: CreateDetalleVentaInput): Promise<DetalleVenta>;
}
