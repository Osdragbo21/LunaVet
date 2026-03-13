import { DetalleVenta } from '../../entities/detalles-venta/detalle-venta.entity';
import { DetalleVentaService } from '../../services/detalleVenta/detalle-venta.service';
import { CreateDetalleVentaInput } from '../../dtos/detalleVenta/create-detalle-venta.input';
export declare class DetalleVentaResolver {
    private readonly srv;
    constructor(srv: DetalleVentaService);
    findAll(): Promise<DetalleVenta[]>;
    createDetalleVenta(input: CreateDetalleVentaInput): Promise<DetalleVenta>;
}
