import { Repository } from 'typeorm';
import { Empleado } from '../../entities/empleados/empleado.entity';
import { CreateEmpleadoInput } from '../../dtos/empleado/create-empleado.input';
export declare class EmpleadoService {
    private empleadoRepository;
    constructor(empleadoRepository: Repository<Empleado>);
    findAll(): Promise<Empleado[]>;
    create(createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado>;
}
