import { AuditoriaLog } from '../../entities/auditorias-log/auditoria-log.entity';
import { AuditoriaLogService } from '../../services/auditoriaLog/auditoria-log.service';
import { CreateAuditoriaLogInput } from '../../dtos/auditoriaLog/create-auditoria-log.input';
export declare class AuditoriaLogResolver {
    private readonly srv;
    constructor(srv: AuditoriaLogService);
    findAll(): Promise<AuditoriaLog[]>;
    createAuditoriaLog(input: CreateAuditoriaLogInput): Promise<AuditoriaLog>;
}
