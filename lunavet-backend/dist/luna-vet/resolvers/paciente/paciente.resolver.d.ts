import { Paciente } from '../../entities/pacientes/paciente.entity';
import { PacienteService } from '../../services/paciente/paciente.service';
import { CreatePacienteInput } from '../../dtos/paciente/create-paciente.input';
export declare class PacienteResolver {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    findAll(): Promise<Paciente[]>;
    createPaciente(createPacienteInput: CreatePacienteInput): Promise<Paciente>;
}
