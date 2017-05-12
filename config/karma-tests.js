import '../src/app';
import 'jquery';
import 'angular-mocks';

import { expect } from 'chai';

var testsContext = require.context("../src", true, /.spec$/);

testsContext.keys().forEach(testsContext);
