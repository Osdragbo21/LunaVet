import { Receta } from '../recetas/receta.entity';
import { Medicamento } from '../medicamentos/medicamento.entity';
export declare class DetalleReceta {
    id_detalle_receta: number;
    receta_id: number;
    receta: Receta;
    medicamento_id: number;
    medicamento: Medicamento;
    dosis: string;
    frecuencia: string;
    duracion_dias: number;
}
