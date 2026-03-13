import { Producto } from '../../entities/productos/producto.entity';
import { ProductoService } from '../../services/producto/producto.service';
import { CreateProductoInput } from '../../dtos/producto/create-producto.input';
export declare class ProductoResolver {
    private readonly srv;
    constructor(srv: ProductoService);
    findAll(): Promise<Producto[]>;
    createProducto(input: CreateProductoInput): Promise<Producto>;
}
