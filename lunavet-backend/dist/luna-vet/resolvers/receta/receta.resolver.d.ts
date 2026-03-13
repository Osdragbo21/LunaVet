import { Receta } from '../../entities/recetas/receta.entity';
import { RecetaService } from '../../services/receta/receta.service';
import { CreateRecetaInput } from '../../dtos/receta/create-receta.input';
export declare class RecetaResolver {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    findAll(): Promise<Receta[]>;
    createReceta(createInput: CreateRecetaInput): Promise<Receta>;
}
