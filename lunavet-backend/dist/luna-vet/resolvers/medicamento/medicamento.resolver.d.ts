import { Medicamento } from '../../entities/medicamentos/medicamento.entity';
import { MedicamentoService } from '../../services/medicamento/medicamento.service';
import { CreateMedicamentoInput } from '../../dtos/medicamento/create-medicamento.input';
export declare class MedicamentoResolver {
    private readonly medicamentoService;
    constructor(medicamentoService: MedicamentoService);
    findAll(): Promise<Medicamento[]>;
    createMedicamento(createInput: CreateMedicamentoInput): Promise<Medicamento>;
}
