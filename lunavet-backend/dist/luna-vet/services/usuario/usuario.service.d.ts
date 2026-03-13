import { Repository } from 'typeorm';
import { Usuario } from '../../entities/usuarios/usuario.entity';
import { CreateUsuarioInput } from '../../dtos/usuario/create-usuario.input';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario>;
}
