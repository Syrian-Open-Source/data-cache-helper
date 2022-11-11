import { DataSizeCalc } from '../interfaces';
import { ObjectConverterService } from '../../object';

class DataSizeCalcService implements DataSizeCalc {
  public getSizeByKB(data: any): number {
    return this.getDataSize(data) / 1024;
  }

  public getSizeByMB(data: any): number {
    return this.getSizeByKB(data) / 1024;
  }

  private getDataSize(data: any): number {
    const dataEncode: Uint8Array = new TextEncoder().encode(ObjectConverterService.toString(data));
    return dataEncode.length;
  }
}

export default new DataSizeCalcService();
