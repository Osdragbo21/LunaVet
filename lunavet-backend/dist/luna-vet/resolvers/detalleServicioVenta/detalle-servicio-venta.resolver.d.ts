import { DetalleServicioVenta } from '../../entities/detalles-servicios-venta/detalle-servicio-venta.entity';
import { DetalleServicioVentaService } from '../../services/detalleServicioVenta/detalle-servicio-venta.service';
import { CreateDetalleServicioVentaInput } from '../../dtos/detalleServicioVenta/create-detalle-servicio-venta.input';
export declare class DetalleServicioVentaResolver {
    private readonly srv;
    constructor(srv: DetalleServicioVentaService);
    findAll(): Promise<DetalleServicioVenta[]>;
    createDetalleServicioVenta(input: CreateDetalleServicioVentaInput): Promise<DetalleServicioVenta>;
}
