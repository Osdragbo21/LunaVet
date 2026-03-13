import { Usuario } from '../usuarios/usuario.entity';
import { VeterinarioEspecialidad } from '../veterinarios-especialidades/veterinario-especialidad.entity';
export declare class Empleado {
    id_empleado: number;
    usuario_id: number;
    usuario: Usuario;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    telefono: string;
    email_empleado: string;
    puesto: string;
    fecha_contratacion: Date;
    especialidades: VeterinarioEspecialidad[];
}
