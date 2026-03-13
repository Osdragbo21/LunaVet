import { Servicio } from '../../entities/servicios/servicio.entity';
import { ServicioService } from '../../services/servicio/servicio.service';
import { CreateServicioInput } from '../../dtos/servicio/create-servicio.input';
export declare class ServicioResolver {
    private readonly srv;
    constructor(srv: ServicioService);
    findAll(): Promise<Servicio[]>;
    createServicio(input: CreateServicioInput): Promise<Servicio>;
}
