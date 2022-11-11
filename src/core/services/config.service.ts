import { IConfig } from '../../interfaces';

let _globalConfig: IConfig = {};

class ConfigService {
  public setGlobal(config: IConfig): void {
    _globalConfig = config;
  }

  public getGlobal(): IConfig {
    return _globalConfig;
  }
}

export default new ConfigService();
