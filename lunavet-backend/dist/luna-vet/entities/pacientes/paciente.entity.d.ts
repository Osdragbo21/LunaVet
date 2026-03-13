import { Cliente } from '../clientes/cliente.entity';
export declare class Paciente {
    id_paciente: number;
    cliente_id: number;
    cliente: Cliente;
    nombre: string;
    especie: string;
    raza: string;
    fecha_nacimiento: Date;
    genero: string;
    color: string;
    alergias: string;
}
