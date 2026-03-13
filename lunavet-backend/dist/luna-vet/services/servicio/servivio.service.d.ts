import { Repository } from 'typeorm';
import { Consulta } from '../../entities/consultas/consulta.entity';
import { CreateConsultaInput } from '../../dtos/consulta/create-consulta.input';
export declare class ConsultaService {
    private consultaRepository;
    constructor(consultaRepository: Repository<Consulta>);
    findAll(): Promise<Consulta[]>;
    create(createConsultaInput: CreateConsultaInput): Promise<Consulta>;
}
