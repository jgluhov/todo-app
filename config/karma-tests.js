import '../src/app';
import 'angular-mocks';
import 'chai';

var testsContext = require.context("../src", true, /.spec$/);

testsContext.keys().forEach(testsContext);
