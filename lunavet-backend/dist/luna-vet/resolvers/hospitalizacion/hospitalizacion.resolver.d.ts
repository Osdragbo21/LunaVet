import { Hospitalizacion } from '../../entities/hospitalizaciones/hospitalizacion.entity';
import { HospitalizacionService } from '../../services/hospitalizacion/hospitalizacion.service';
import { CreateHospitalizacionInput } from '../../dtos/hospitalizacion/create-hospitalizacion.input';
export declare class HospitalizacionResolver {
    private readonly hospitalizacionService;
    constructor(hospitalizacionService: HospitalizacionService);
    findAll(): Promise<Hospitalizacion[]>;
    createHospitalizacion(createInput: CreateHospitalizacionInput): Promise<Hospitalizacion>;
}
