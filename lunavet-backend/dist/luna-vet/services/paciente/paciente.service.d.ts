import { Repository } from 'typeorm';
import { Paciente } from '../../entities/pacientes/paciente.entity';
import { CreatePacienteInput } from '../../dtos/paciente/create-paciente.input';
export declare class PacienteService {
    private pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    findAll(): Promise<Paciente[]>;
    create(createPacienteInput: CreatePacienteInput): Promise<Paciente>;
}
