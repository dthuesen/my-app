'use strict';

import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('myAppApp.admin', ['myAppApp.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
