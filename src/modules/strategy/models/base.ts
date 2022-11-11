import { BaseService, IConfig } from '../../../interfaces';
import { Strategy } from '../interfaces';
import { isEmpty, isExpired } from '../../helpers';
import { DataSizeCalc } from '../../file-size/interfaces';

export abstract class BaseStrategy implements Strategy {
  protected readonly baseService!: BaseService;
  protected readonly dataSizeCalcService!: DataSizeCalc;

  public get(key: string): any {
    // Data not cached yet..
    if (!this.baseService.isExist(key)) return null;

    const _cachedData = this.baseService.getByKey(key)?.data;
    const _cacheTimer = this.baseService.getByKey(key)?.timer || 0;

    if (isEmpty(_cachedData)) return null;

    if (isExpired(_cacheTimer)) {
      this.baseService.delete(key);
      return null;
    }

    return _cachedData;
  }

  public set(key: string, data: any, config: IConfig): void {
    const _cacheTimer = config.cacheTimer! * 1000;

    if (isEmpty(data)) return;
    if (this.baseService.isExist(key)) return;

    if (this.dataSizeCalcService.getSizeByMB(data) > config.maxSize!) {
      throw new Error('Store size is full.');
    }

    if (this.dataSizeCalcService.getSizeByMB(this.baseService.getAll()) > config.maxSize!) {
      throw new Error('Store size is full.');
    }

    this.baseService.set(key, {
      timer: Date.now() + _cacheTimer,
      data,
    });
  }

  public size(key?: string): number {
    let data: any;
    data = key === undefined ? this.baseService.getAll() : this.baseService.getByKey(key);
    return isEmpty(data) ? 0 : this.dataSizeCalcService.getSizeByMB(data);
  }
}
