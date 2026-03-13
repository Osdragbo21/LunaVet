import { DetalleReceta } from '../../entities/detalles-receta/detalle-receta.entity';
import { DetalleRecetaService } from '../../services/detalleReceta/detalle-receta.service';
import { CreateDetalleRecetaInput } from '../../dtos/detalleReceta/create-detalle-receta.input';
export declare class DetalleRecetaResolver {
    private readonly detalleService;
    constructor(detalleService: DetalleRecetaService);
    findAll(): Promise<DetalleReceta[]>;
    createDetalleReceta(createInput: CreateDetalleRecetaInput): Promise<DetalleReceta>;
}
