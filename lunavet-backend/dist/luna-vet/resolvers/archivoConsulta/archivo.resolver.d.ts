import { ArchivoConsultaService } from '../../services/archivoConsulta/archivo-consulta.service';
import { CreateArchivoConsultaInput } from '../../dtos/archivoConsulta/create-archivo-consulta.input';
export declare class ArchivoConsultaResolver {
    private readonly archivoService;
    constructor(archivoService: ArchivoConsultaService);
    findAll(): any;
    createArchivoConsulta(createInput: CreateArchivoConsultaInput): any;
}
