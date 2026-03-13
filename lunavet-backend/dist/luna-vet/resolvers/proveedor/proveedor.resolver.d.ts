import { Proveedor } from '../../entities/proveedores/proveedor.entity';
import { ProveedorService } from '../../services/proveedor/proveedor.service';
import { CreateProveedorInput } from '../../dtos/proveedor/create-proveedor.input';
export declare class ProveedorResolver {
    private readonly srv;
    constructor(srv: ProveedorService);
    findAll(): Promise<Proveedor[]>;
    createProveedor(input: CreateProveedorInput): Promise<Proveedor>;
}
