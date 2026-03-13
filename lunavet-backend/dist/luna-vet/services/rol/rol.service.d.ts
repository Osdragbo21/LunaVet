import { Repository } from 'typeorm';
import { Rol } from '../../entities/roles/rol.entity';
import { CreateRolInput } from '../../dtos/rol/create-rol.input';
export declare class RolService {
    private rolRepository;
    constructor(rolRepository: Repository<Rol>);
    findAll(): Promise<Rol[]>;
    create(createRolInput: CreateRolInput): Promise<Rol>;
}
