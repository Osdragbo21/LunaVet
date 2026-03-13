import { Usuario } from '../../entities/usuarios/usuario.entity';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { CreateUsuarioInput } from '../../dtos/usuario/create-usuario.input';
export declare class UsuarioResolver {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
    createUsuario(createUsuarioInput: CreateUsuarioInput): Promise<Usuario>;
}
