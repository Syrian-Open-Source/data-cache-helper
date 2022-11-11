import { IConfig } from '../../../interfaces';
import { Strategy } from '../interfaces';

export class Context implements Strategy {
  constructor(private strategy?: Strategy) {}

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public get(key: string): any {
    if (!this.strategy) throw new Error('You must add a strategy.');
    return this.strategy?.get(key);
  }

  public set(key: string, data: any, config: IConfig): void {
    if (!this.strategy) throw new Error('You must add a strategy.');
    this.strategy?.set(key, data, config);
  }

  public size(key?: string | undefined): number {
    if (!this.strategy) throw new Error('You must add a strategy.');
    return this.strategy?.size(key);
  }
}
