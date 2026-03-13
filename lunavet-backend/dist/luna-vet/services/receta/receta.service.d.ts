import { Repository } from 'typeorm';
import { Receta } from '../../entities/recetas/receta.entity';
import { CreateRecetaInput } from '../../dtos/receta/create-receta.input';
export declare class RecetaService {
    private recetaRepository;
    constructor(recetaRepository: Repository<Receta>);
    findAll(): Promise<Receta[]>;
    create(createInput: CreateRecetaInput): Promise<Receta>;
}
