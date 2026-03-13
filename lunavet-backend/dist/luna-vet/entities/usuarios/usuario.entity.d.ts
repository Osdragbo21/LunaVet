import { Rol } from '../roles/rol.entity';
export declare class Usuario {
    id_usuario: number;
    username: string;
    password_hash: string;
    rol_id: number;
    rol: Rol;
    activo: boolean;
    created_at: Date;
}
