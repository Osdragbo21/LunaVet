import { Repository } from 'typeorm';
import { Cliente } from '../../entities/clientes/cliente.entity';
import { CreateClienteInput } from '../../dtos/cliente/create-cliente.input';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    findAll(): Promise<Cliente[]>;
    create(createClienteInput: CreateClienteInput): Promise<Cliente>;
}
