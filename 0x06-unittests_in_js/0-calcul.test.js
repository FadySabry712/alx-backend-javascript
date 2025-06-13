const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding b\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding a and b\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding a\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding b\'s floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding a and b\'s floating point numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding a\'s floating point numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding a and b floating point numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
