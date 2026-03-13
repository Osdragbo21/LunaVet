import { Consulta } from '../consultas/consulta.entity';
export declare class Receta {
    id_receta: number;
    consulta_id: number;
    consulta: Consulta;
    fecha_emision: Date;
    observaciones_generales: string;
}
