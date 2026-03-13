import { Repository } from 'typeorm';
import { Venta } from '../../entities/ventas/venta.entity';
import { CreateVentaInput } from '../../dtos/venta/create-venta.input';
export declare class VentaService {
    private rep;
    constructor(rep: Repository<Venta>);
    findAll(): Promise<Venta[]>;
    create(input: CreateVentaInput): Promise<Venta>;
}
