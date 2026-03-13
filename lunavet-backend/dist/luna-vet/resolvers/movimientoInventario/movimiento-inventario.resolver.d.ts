import { MovimientoInventario } from '../../entities/movimientos-inventario/movimiento-inventario.entity';
import { MovimientoInventarioService } from '../../services/movimientoInventario/movimiento-inventario.service';
import { CreateMovimientoInventarioInput } from '../../dtos/movimientoInventario/create-movimiento-inventario.input';
export declare class MovimientoInventarioResolver {
    private readonly srv;
    constructor(srv: MovimientoInventarioService);
    findAll(): Promise<MovimientoInventario[]>;
    createMovimientoInventario(input: CreateMovimientoInventarioInput): Promise<MovimientoInventario>;
}
