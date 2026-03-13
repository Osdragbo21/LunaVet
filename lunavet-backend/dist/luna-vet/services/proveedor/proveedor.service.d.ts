import { Repository } from 'typeorm';
import { Proveedor } from '../../entities/proveedores/proveedor.entity';
import { CreateProveedorInput } from '../../dtos/proveedor/create-proveedor.input';
export declare class ProveedorService {
    private rep;
    constructor(rep: Repository<Proveedor>);
    findAll(): Promise<Proveedor[]>;
    create(input: CreateProveedorInput): Promise<Proveedor>;
}
