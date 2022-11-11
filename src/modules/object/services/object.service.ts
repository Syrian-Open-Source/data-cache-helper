import { BaseService, IData, IMemo } from '../../../interfaces';
import { isEmpty, isNotEmpty } from '../../helpers';
import { _STATE_ } from '../store';

class ObjectService implements BaseService {
  private state = _STATE_;

  public set(key: string, data: any): void {
    this.state[key] = data;
  }

  public getAll(): IMemo {
    return this.state;
  }

  public getByKey(key: string): IData {
    return this.state[key];
  }

  public delete(key: string): void {
    delete this.state[key];
  }

  public clear(): void {
    this.state = {} as IMemo;
  }

  public isExist(key: string = ''): boolean {
    if (isEmpty(this.state)) return false;
    return isNotEmpty(this.state[key]);
  }
}

export default new ObjectService();
