import { RegistroVacunacion } from '../../entities/registros-vacunacion/registro-vacunacion.entity';
import { RegistroVacunacionService } from '../../services/registroVacunacion/registro-vacunacion.service';
import { CreateRegistroVacunacionInput } from '../../dtos/registroVacunacion/create-registro-vacunacion.input';
export declare class RegistroVacunacionResolver {
    private readonly registroService;
    constructor(registroService: RegistroVacunacionService);
    findAll(): Promise<RegistroVacunacion[]>;
    createRegistroVacunacion(createInput: CreateRegistroVacunacionInput): Promise<RegistroVacunacion>;
}
