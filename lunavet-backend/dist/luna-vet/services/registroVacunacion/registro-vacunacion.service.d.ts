import { Repository } from 'typeorm';
import { RegistroVacunacion } from '../../entities/registros-vacunacion/registro-vacunacion.entity';
import { CreateRegistroVacunacionInput } from '../../dtos/registroVacunacion/create-registro-vacunacion.input';
export declare class RegistroVacunacionService {
    private registroRepository;
    constructor(registroRepository: Repository<RegistroVacunacion>);
    findAll(): Promise<RegistroVacunacion[]>;
    create(createInput: CreateRegistroVacunacionInput): Promise<RegistroVacunacion>;
}
