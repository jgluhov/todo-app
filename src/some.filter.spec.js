import { expect } from 'chai';

describe("SOME FILTER TEST", () => {
  let $injector,
    $filter,
    someFilter;

  beforeEach(angular.mock.module('todoApp'))

  beforeEach(angular.mock.inject(_$injector_ => {
    $injector = _$injector_;
  }))

  beforeEach(() => {
    $filter = $injector.get('$filter');
  })

  beforeEach(() => {
    someFilter = $filter('someFilter');
  })


  it('should angular.module contain $filter("some")', () => {
    expect(someFilter).to.be.ok;
  });

  it('should join characters with spaces if passed correct string', () => {
    const sampleText = 'some text';
    const expectedText = 's o m e t e x t';

    expect(someFilter(sampleText)).to.be.equal(expectedText);
  });

  it('should return an empty string if passed empty text', () => {
    const sampleText = '';
    const expectedText = '';

    expect(someFilter(sampleText)).to.be.equal(expectedText);
  });

  it('should return an empty string if passed null or undefined', () => {
    const expectedText = '';

    expect(someFilter(null)).to.be.equal(expectedText);
    expect(someFilter(undefined)).to.be.equal(expectedText);
    expect(someFilter(0)).to.be.equal(expectedText);
  })

})
