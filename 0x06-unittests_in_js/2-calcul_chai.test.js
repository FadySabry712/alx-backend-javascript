const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function () {
    it('return the sum of numbers', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('return the difference of numbers', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('return the division of numbers', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('return "Error" if  b is 0', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
