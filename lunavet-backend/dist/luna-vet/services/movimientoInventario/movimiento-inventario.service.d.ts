import { Repository } from 'typeorm';
import { MovimientoInventario } from '../../entities/movimientos-inventario/movimiento-inventario.entity';
import { CreateMovimientoInventarioInput } from '../../dtos/movimientoInventario/create-movimiento-inventario.input';
export declare class MovimientoInventarioService {
    private rep;
    constructor(rep: Repository<MovimientoInventario>);
    findAll(): Promise<MovimientoInventario[]>;
    create(input: CreateMovimientoInventarioInput): Promise<MovimientoInventario>;
}
