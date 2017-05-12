import '../src/app';
import 'angular-mocks';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

var testsContext = require.context("../src", true, /.spec$/);

testsContext.keys().forEach(testsContext);
