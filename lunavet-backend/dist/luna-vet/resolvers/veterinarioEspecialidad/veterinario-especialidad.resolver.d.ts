import { VeterinarioEspecialidad } from '../../entities/veterinarios-especialidades/veterinario-especialidad.entity';
import { VeterinarioEspecialidadService } from '../../services/veterinarioEspecialidad/veterinario-especialidad.service';
import { CreateVeterinarioEspecialidadInput } from '../../dtos/veterinarioEspecialidad/create-veterinario-especialidad.input';
export declare class VeterinarioEspecialidadResolver {
    private readonly vetEspService;
    constructor(vetEspService: VeterinarioEspecialidadService);
    findAll(): Promise<VeterinarioEspecialidad[]>;
    createVeterinarioEspecialidad(createInput: CreateVeterinarioEspecialidadInput): Promise<VeterinarioEspecialidad>;
}
