import { Paciente } from '../pacientes/paciente.entity';
import { Vacuna } from '../vacunas/vacuna.entity';
export declare class RegistroVacunacion {
    id_registro_vac: number;
    paciente_id: number;
    paciente: Paciente;
    vacuna_id: number;
    vacuna: Vacuna;
    fecha_aplicacion: Date;
    proxima_dosis: Date;
}
