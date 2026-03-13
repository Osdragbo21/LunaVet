import { Cita } from '../../entities/citas/cita.entity';
import { CitaService } from '../../services/cita/cita.service';
import { CreateCitaInput } from '../../dtos/cita/create-cita.input';
export declare class CitaResolver {
    private readonly citaService;
    constructor(citaService: CitaService);
    findAll(): Promise<Cita[]>;
    createCita(createCitaInput: CreateCitaInput): Promise<Cita>;
}
