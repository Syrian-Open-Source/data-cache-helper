import { BaseService } from '../../../interfaces';
import { BaseStrategy } from './base';

import { ObjectService } from '../../object';
import { DataSizeCalc, DataSizeCalcService } from '../../file-size';

export class ObjectStrategy extends BaseStrategy {
  protected baseService: BaseService = ObjectService;
  protected dataSizeCalcService: DataSizeCalc = DataSizeCalcService;
}
