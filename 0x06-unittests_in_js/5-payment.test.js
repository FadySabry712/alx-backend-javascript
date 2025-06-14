const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) with "The total is: 120" to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) with "The total is: 20" to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
