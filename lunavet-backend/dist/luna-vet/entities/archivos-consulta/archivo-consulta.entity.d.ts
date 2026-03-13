import { Consulta } from '../consultas/consulta.entity';
export declare class ArchivoConsulta {
    id_archivo: number;
    consulta_id: number;
    consulta: Consulta;
    url_archivo: string;
    tipo_documento: string;
    fecha_subida: Date;
}
