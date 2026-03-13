import { Paciente } from '../pacientes/paciente.entity';
import { Empleado } from '../empleados/empleado.entity';
import { Consulta } from '../consultas/consulta.entity';
export declare class Cita {
    id_cita: number;
    paciente_id: number;
    paciente: Paciente;
    empleado_id: number;
    empleado: Empleado;
    fecha_hora: Date;
    motivo: string;
    estado: string;
    consulta?: Consulta;
}
