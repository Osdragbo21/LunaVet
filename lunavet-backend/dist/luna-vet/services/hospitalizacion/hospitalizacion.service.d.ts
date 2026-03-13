import { Repository } from 'typeorm';
import { Hospitalizacion } from '../../entities/hospitalizaciones/hospitalizacion.entity';
import { CreateHospitalizacionInput } from '../../dtos/hospitalizacion/create-hospitalizacion.input';
export declare class HospitalizacionService {
    private hospitalizacionRepository;
    constructor(hospitalizacionRepository: Repository<Hospitalizacion>);
    findAll(): Promise<Hospitalizacion[]>;
    create(createInput: CreateHospitalizacionInput): Promise<Hospitalizacion>;
}
