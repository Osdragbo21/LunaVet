import { Repository } from 'typeorm';
import { VeterinarioEspecialidad } from '../../entities/veterinarios-especialidades/veterinario-especialidad.entity';
import { CreateVeterinarioEspecialidadInput } from '../../dtos/veterinarioEspecialidad/create-veterinario-especialidad.input';
export declare class VeterinarioEspecialidadService {
    private vetEspRepository;
    constructor(vetEspRepository: Repository<VeterinarioEspecialidad>);
    findAll(): Promise<VeterinarioEspecialidad[]>;
    create(createInput: CreateVeterinarioEspecialidadInput): Promise<VeterinarioEspecialidad>;
}
