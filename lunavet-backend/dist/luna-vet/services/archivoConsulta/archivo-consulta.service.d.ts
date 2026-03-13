import { Repository } from 'typeorm';
import { ArchivoConsulta } from '../../entities/archivos-consulta/archivo-consulta.entity';
import { CreateArchivoConsultaInput } from '../../dtos/archivoConsulta/create-archivo-consulta.input';
export declare class ArchivoConsultaService {
    private archivoRepository;
    constructor(archivoRepository: Repository<ArchivoConsulta>);
    findAll(): Promise<ArchivoConsulta[]>;
    create(createInput: CreateArchivoConsultaInput): Promise<ArchivoConsulta>;
}
