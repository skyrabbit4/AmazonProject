import {formatCurrency} from '../../scripts/utils/money.js';

describe('formatCurrency', function() {
  it('should format 2095 as 20.95', function() {
    expect(formatCurrency(2095)).toBe('20.95');
  });
  it('should format 100 as 1.00', function() {
    expect(formatCurrency(100)).toBe('1.00');
  });
  it('should format 2000.5 as 20.01', function() {
    expect(formatCurrency(2000.5)).toBe('20.01');
  });
});