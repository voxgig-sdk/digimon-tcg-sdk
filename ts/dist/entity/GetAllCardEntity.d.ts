import { DigimonTcgEntityBase } from '../DigimonTcgEntityBase';
import type { DigimonTcgSDK } from '../DigimonTcgSDK';
import type { Control } from '../types';
import type { GetAllCard, GetAllCardListMatch } from '../DigimonTcgTypes';
declare class GetAllCardEntity extends DigimonTcgEntityBase<GetAllCard> {
    constructor(client: DigimonTcgSDK, entopts: any);
    make(this: GetAllCardEntity): GetAllCardEntity;
    list(this: any, reqmatch?: GetAllCardListMatch, ctrl?: Control): Promise<GetAllCardEntity[]>;
}
export { GetAllCardEntity };
