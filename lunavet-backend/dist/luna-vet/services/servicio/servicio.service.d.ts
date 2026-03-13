import { Repository } from 'typeorm';
import { Servicio } from '../../entities/servicios/servicio.entity';
import { CreateServicioInput } from '../../dtos/servicio/create-servicio.input';
export declare class ServicioService {
    private rep;
    constructor(rep: Repository<Servicio>);
    findAll(): Promise<Servicio[]>;
    create(input: CreateServicioInput): Promise<Servicio>;
}
