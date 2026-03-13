import { Usuario } from '../usuarios/usuario.entity';
export declare class AuditoriaLog {
    id_log: number;
    usuario_id: number;
    usuario: Usuario;
    accion: string;
    tabla_afectada: string;
    fecha: Date;
}
