import { BaseService } from '../../../interfaces';
import { BaseStrategy } from './base';

import { DataSizeCalcService, DataSizeCalc } from '../../file-size';
import { LocalStorageService } from '../../localstorage';

export class LocalStorageStrategy extends BaseStrategy {
  protected baseService: BaseService = LocalStorageService;
  protected dataSizeCalcService: DataSizeCalc = DataSizeCalcService;
}
