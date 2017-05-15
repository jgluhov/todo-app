import TodoFactory from './todo/todo.factory';

import { expect } from 'chai';

describe("TodoApp", () => {
  let sandbox,
    componentController,
    componentScope,
    $compile,
    $rootScope,
    parentScope,
    $componentElement,
    $titleElement;

  beforeEach(angular.mock.module('todoApp'));

  describe("Todo component common cases", () => {
    beforeEach(angular.mock.inject((_$compile_, _$rootScope_) => {
      sandbox = sinon.sandbox.create();

      $compile = _$compile_;
      $rootScope = _$rootScope_;
      parentScope = $rootScope.$new();

      $componentElement = $compile('<todo-component></todo-component>')(parentScope);
      componentScope = $componentElement.isolateScope();
      componentController = componentScope.vm;

      componentScope.$digest();
    }));

    describe("Component title", () => {
      beforeEach(() =>
        $titleElement = $componentElement.find('span[ng-bind="vm.title"]')
      );

      it('should contain title element', () => expect($titleElement).to.exist);

      it('title property should be initialized', () => {
        expect(componentController.title).to.be.a('string');
        expect(componentController.title).to.not.be.empty;
      });

      it('title property should be rendered', () => {
        expect($titleElement.text()).to.be.equal(componentController.title);
      });
    });

    describe("Component todos", () => {
      it('should contain empty todos array after initialization', () => {
        expect(componentController.todos).to.be.exist;
        expect(Array.isArray(componentController.todos)).to.be.true;
        expect(componentController.todos).to.be.empty;
      });
    })


    afterEach(() => {
      sandbox.restore();
    })
  });
})
