import { Empleado } from '../../entities/empleados/empleado.entity';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { CreateEmpleadoInput } from '../../dtos/empleado/create-empleado.input';
export declare class EmpleadoResolver {
    private readonly empleadoService;
    constructor(empleadoService: EmpleadoService);
    findAll(): Promise<Empleado[]>;
    createEmpleado(createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado>;
}
