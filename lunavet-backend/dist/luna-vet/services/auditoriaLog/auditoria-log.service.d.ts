import { Repository } from 'typeorm';
import { AuditoriaLog } from '../../entities/auditorias-log/auditoria-log.entity';
import { CreateAuditoriaLogInput } from '../../dtos/auditoriaLog/create-auditoria-log.input';
export declare class AuditoriaLogService {
    private readonly rep;
    constructor(rep: Repository<AuditoriaLog>);
    findAll(): Promise<AuditoriaLog[]>;
    create(input: CreateAuditoriaLogInput): Promise<AuditoriaLog>;
}
