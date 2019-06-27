import Config from '../config';
import config from '../index';

describe('Config', () => {
  it('is instantiated correctly', () => {
    expect(config).toBeInstanceOf(Config);
    expect(config).toMatchObject({
      serverUrl: 'https://test.url/',
    });
  });
});
