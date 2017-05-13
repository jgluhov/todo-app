const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('todo page', () => {
  it('should show todo form', () => {
    expect(true).to.be.true;
  });
});
