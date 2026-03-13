import { Rol } from '../../entities/roles/rol.entity';
import { RolService } from '../../services/rol/rol.service';
import { CreateRolInput } from '../../dtos/rol/create-rol.input';
export declare class RolResolver {
    private readonly rolService;
    constructor(rolService: RolService);
    findAll(): Promise<Rol[]>;
    createRol(createRolInput: CreateRolInput): Promise<Rol>;
}
