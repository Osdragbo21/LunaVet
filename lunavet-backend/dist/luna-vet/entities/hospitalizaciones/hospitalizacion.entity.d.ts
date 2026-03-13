import { Paciente } from '../pacientes/paciente.entity';
import { Empleado } from '../empleados/empleado.entity';
export declare class Hospitalizacion {
    id_hospitalizacion: number;
    paciente_id: number;
    paciente: Paciente;
    empleado_id: number;
    empleado: Empleado;
    fecha_ingreso: Date;
    fecha_alta: Date;
    motivo: string;
    estado: string;
}
