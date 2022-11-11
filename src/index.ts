import { SearchService, ConfigService } from './core';
import { defaultConfig } from './core/store';
import { IConfig, StoreIn } from './interfaces';
import { Context, LocalStorageStrategy, ObjectStrategy } from './modules/strategy';

const _GLOBAL_CONFIG_ = () => ConfigService.getGlobal();

class DataCacheHelper {
  private readonly context!: Context;

  constructor() {
    this.context = new Context();
  }

  public setGlobalConfig(config: IConfig): void {
    ConfigService.setGlobal(config);
  }

  public get(key: string): any {
    const storeIn: StoreIn | null = _GLOBAL_CONFIG_().storeIn ?? SearchService.isStoreIn(key);

    if (storeIn === 'LOCALSTORAGE') {
      this.context.setStrategy(new LocalStorageStrategy());
    }

    if (storeIn === 'OBJECT') {
      this.context.setStrategy(new ObjectStrategy());
    }

    return this.context.get(key);
  }

  public set(key: string, data: any, config?: IConfig) {
    const cacheTimer = config?.cacheTimer ?? _GLOBAL_CONFIG_().cacheTimer ?? defaultConfig.cacheTimer;
    const storeIn = config?.storeIn ?? _GLOBAL_CONFIG_().storeIn ?? defaultConfig.storeIn;
    const maxSize = config?.maxSize ?? _GLOBAL_CONFIG_().maxSize ?? defaultConfig.maxSize;

    if (storeIn === 'LOCALSTORAGE') {
      this.context.setStrategy(new LocalStorageStrategy());
    }

    if (storeIn === 'OBJECT') {
      this.context.setStrategy(new ObjectStrategy());
    }

    this.context.set(key, data, { cacheTimer, storeIn, maxSize });
  }

  public size(config?: { key?: string; from?: StoreIn }): number {
    let storeIn: StoreIn | null = null;
    let key: string | undefined;

    if (config?.key && config?.key?.trim() !== '') {
      storeIn = SearchService.isStoreIn(config.key);
      key = config.key;
    }

    if (storeIn === null) {
      storeIn = config?.from ?? _GLOBAL_CONFIG_().storeIn ?? 'OBJECT';
    }

    if (storeIn === 'LOCALSTORAGE') {
      this.context.setStrategy(new LocalStorageStrategy());
    }

    if (storeIn === 'OBJECT') {
      this.context.setStrategy(new ObjectStrategy());
    }

    return this.context.size(key);
  }
}

export default new DataCacheHelper();
