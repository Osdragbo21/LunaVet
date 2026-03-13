import { Consulta } from '../../entities/consultas/consulta.entity';
import { ConsultaService } from '../../services/consulta/consulta.service';
import { CreateConsultaInput } from '../../dtos/consulta/create-consulta.input';
export declare class ConsultaResolver {
    private readonly consultaService;
    constructor(consultaService: ConsultaService);
    findAll(): Promise<Consulta[]>;
    createConsulta(createConsultaInput: CreateConsultaInput): Promise<Consulta>;
}
