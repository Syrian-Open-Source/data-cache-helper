import { ConfigService } from '../../../core';
import { mockConfig } from '../../../mock';

const configService = ConfigService;

describe('Config Service: ', () => {
  test('Should set global config: ', () => {
    configService.setGlobal(mockConfig);
  });
  test('Should get global config: ', () => {
    expect(configService.getGlobal()).toBe(mockConfig);
  });
});
