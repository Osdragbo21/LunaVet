import { Cita } from '../citas/cita.entity';
import { ArchivoConsulta } from '../archivos-consulta/archivo-consulta.entity';
export declare class Consulta {
    id_consulta: number;
    cita_id: number;
    cita: Cita;
    peso_actual: number;
    temperatura: number;
    frecuencia_cardiaca: number;
    diagnostico: string;
    observaciones: string;
    archivos: ArchivoConsulta[];
}
