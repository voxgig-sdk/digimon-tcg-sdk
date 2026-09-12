import { DigimonTcgEntityBase } from '../DigimonTcgEntityBase';
import type { DigimonTcgSDK } from '../DigimonTcgSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../DigimonTcgTypes';
declare class SearchEntity extends DigimonTcgEntityBase<Search> {
    constructor(client: DigimonTcgSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
