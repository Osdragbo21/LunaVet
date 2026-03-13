import { Venta } from '../../entities/ventas/venta.entity';
import { VentaService } from '../../services/venta/venta.service';
import { CreateVentaInput } from '../../dtos/venta/create-venta.input';
export declare class VentaResolver {
    private readonly srv;
    constructor(srv: VentaService);
    findAll(): Promise<Venta[]>;
    createVenta(input: CreateVentaInput): Promise<Venta>;
}
