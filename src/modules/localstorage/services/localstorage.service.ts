import { ObjectConverterService } from '../../object';
import { BaseService, IData, IMemo } from '../../../interfaces';
import { isClientSide, isEmpty, isNotEmpty } from '../../helpers';
import { STATE_KEY, _STATE_ } from '../store';

class LocalStorageService implements BaseService {
  public set(key: string, data: any): void {
    if (!isClientSide()) return;

    const state = _STATE_();
    state[key] = data;
    localStorage.setItem(STATE_KEY, ObjectConverterService.toString(state));
  }

  public getAll(): IMemo {
    return _STATE_();
  }

  public getByKey(key: string): IData {
    return _STATE_()[key];
  }

  public delete(key: string): void {
    if (!isClientSide()) return;

    const state = _STATE_();
    delete state[key];
    localStorage.setItem(STATE_KEY, ObjectConverterService.toString(state));
  }

  public clear(): void {
    if (!isClientSide()) return;

    localStorage.clear();
  }

  public isExist(key: string = ''): boolean {
    const state = _STATE_();
    if (isEmpty(state)) return false;

    return isNotEmpty(state[key]);
  }
}

export default new LocalStorageService();
