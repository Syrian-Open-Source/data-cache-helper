import { StoreIn } from '../../interfaces';

import { LocalStorageService } from '../../modules/localstorage';
import { ObjectService } from '../../modules/object';

class SearchService {
  public isStoreIn(key: string): StoreIn | null {
    if (LocalStorageService.isExist(key)) return 'LOCALSTORAGE';
    if (ObjectService.isExist(key)) return 'OBJECT';
    return null;
  }
}

export default new SearchService();
