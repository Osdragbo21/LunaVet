import { Repository } from 'typeorm';
import { Producto } from '../../entities/productos/producto.entity';
import { CreateProductoInput } from '../../dtos/producto/create-producto.input';
export declare class ProductoService {
    private rep;
    constructor(rep: Repository<Producto>);
    findAll(): Promise<Producto[]>;
    create(input: CreateProductoInput): Promise<Producto>;
}
