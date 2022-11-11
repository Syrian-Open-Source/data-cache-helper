import { isNotEmpty } from '../../helpers';
import { ObjectConverter } from '../interfaces';

class ObjectConverterService implements ObjectConverter {
  public toString(payload: any): string {
    return isNotEmpty(payload) ? JSON.stringify(payload) : '';
  }

  public toObject(payload: string): any {
    return isNotEmpty(payload) ? JSON.parse(payload) : null;
  }
}

export default new ObjectConverterService();
