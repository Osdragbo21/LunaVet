import { Repository } from 'typeorm';
import { DetalleReceta } from '../../entities/detalles-receta/detalle-receta.entity';
import { CreateDetalleRecetaInput } from '../../dtos/detalleReceta/create-detalle-receta.input';
export declare class DetalleRecetaService {
    private detalleRepository;
    constructor(detalleRepository: Repository<DetalleReceta>);
    findAll(): Promise<DetalleReceta[]>;
    create(createInput: CreateDetalleRecetaInput): Promise<DetalleReceta>;
}
