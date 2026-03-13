import { Vacuna } from '../../entities/vacunas/vacuna.entity';
import { VacunaService } from '../../services/vacuna/vacuna.service';
import { CreateVacunaInput } from '../../dtos/vacuna/create-vacuna.input';
export declare class VacunaResolver {
    private readonly vacunaService;
    constructor(vacunaService: VacunaService);
    findAll(): Promise<Vacuna[]>;
    createVacuna(createInput: CreateVacunaInput): Promise<Vacuna>;
}
