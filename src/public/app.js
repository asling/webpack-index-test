import angular from 'angular';
import routes from './app.config';
import home from '../modules/home';
angular.module('app',[home])
	.config(routes);