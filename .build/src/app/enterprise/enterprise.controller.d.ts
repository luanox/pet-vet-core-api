import { EnterpriseService } from './enterprise.service';
import { CreateEnterpriseDto } from './dtos/create-enterprise.dto';
export declare class EnterpriseController {
    private readonly enterpriseService;
    constructor(enterpriseService: EnterpriseService);
    createOne(createEnterpriseDto: CreateEnterpriseDto): Promise<any>;
}
