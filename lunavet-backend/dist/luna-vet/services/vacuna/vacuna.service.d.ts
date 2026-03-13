import { Repository } from 'typeorm';
import { Vacuna } from '../../entities/vacunas/vacuna.entity';
import { CreateVacunaInput } from '../../dtos/vacuna/create-vacuna.input';
export declare class VacunaService {
    private vacunaRepository;
    constructor(vacunaRepository: Repository<Vacuna>);
    findAll(): Promise<Vacuna[]>;
    create(createInput: CreateVacunaInput): Promise<Vacuna>;
}
