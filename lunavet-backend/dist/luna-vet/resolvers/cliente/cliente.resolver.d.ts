import { Cliente } from '../../entities/clientes/cliente.entity';
import { ClienteService } from '../../services/cliente/cliente.service';
import { CreateClienteInput } from '../../dtos/cliente/create-cliente.input';
export declare class ClienteResolver {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    findAll(): Promise<Cliente[]>;
    createCliente(createClienteInput: CreateClienteInput): Promise<Cliente>;
}
