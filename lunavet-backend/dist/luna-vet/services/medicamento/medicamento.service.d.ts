import { Repository } from 'typeorm';
import { Medicamento } from '../../entities/medicamentos/medicamento.entity';
import { CreateMedicamentoInput } from '../../dtos/medicamento/create-medicamento.input';
export declare class MedicamentoService {
    private medicamentoRepository;
    constructor(medicamentoRepository: Repository<Medicamento>);
    findAll(): Promise<Medicamento[]>;
    create(createInput: CreateMedicamentoInput): Promise<Medicamento>;
}
