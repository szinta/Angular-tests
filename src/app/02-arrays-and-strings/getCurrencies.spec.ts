import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const currencies = getCurrencies();

    expect(currencies.length).toBe(3);
    expect(currencies).toContain('USD');
    expect(currencies).toContain('AUD');
    expect(currencies).toContain('EUR');
  });
});