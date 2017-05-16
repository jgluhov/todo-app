import { expect } from 'chai';

describe('TODO List', () => {
  let $todoCmptElement,
    todoCtrl,
    $todoListElement,
    $injector,
    todoListScope,
    parentScope;

  beforeEach(angular.mock.module('todoApp'))

  beforeEach(angular.mock.inject((_$compile_, _$rootScope_, _$injector_) => {
    parentScope = _$rootScope_.$new();
    $injector = _$injector_;

    $todoCmptElement = _$compile_('<todo-component></todo-component>')(parentScope);
    todoCtrl = $todoCmptElement.isolateScope().vm;

    parentScope.$digest();

    $todoListElement = $todoCmptElement.find('todo-list');
    todoListScope = $todoListElement.isolateScope();

    todoCtrl.$onInit();
  }))

  it('should exist todoListDirective', () => {
    expect($injector.has('todoListDirective')).to.be.true;
  });

});
