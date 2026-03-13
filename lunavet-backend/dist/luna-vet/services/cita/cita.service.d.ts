import { Repository } from 'typeorm';
import { Cita } from '../../entities/citas/cita.entity';
import { CreateCitaInput } from '../../dtos/cita/create-cita.input';
export declare class CitaService {
    private citaRepository;
    constructor(citaRepository: Repository<Cita>);
    findAll(): Promise<Cita[]>;
    create(createCitaInput: CreateCitaInput): Promise<Cita>;
}
