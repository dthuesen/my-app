'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('myAppApp.util', [])
  .factory('Util', UtilService)
  .name;
