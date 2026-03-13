import { Usuario } from '../usuarios/usuario.entity';
import { Paciente } from '../pacientes/paciente.entity';
export declare class Cliente {
    id_cliente: number;
    usuario_id: number;
    usuario: Usuario;
    nombre_completo: string;
    telefono_principal: string;
    direccion: string;
    pacientes: Paciente[];
}
