import { IConfig } from '../../../interfaces';

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
export interface Strategy {
  get(key: string): any;
  set(key: string, data: any, config: IConfig): void;
  size(key?: string): number;
}
