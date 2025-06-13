const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function () {
    it('return the sum of numbers', function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('return the difference of numbers', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('return the division of numbers', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('return "Error" if rounded b is equal 0', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
