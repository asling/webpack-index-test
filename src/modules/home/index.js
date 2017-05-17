import angular from 'angular';
import "./home.scss";
import route from './home.route';
import { HomeController, HomeControllerName } from './home.controller';

const MODULE_NAME = 'home';
export default angular.module(MODULE_NAME).config(route)
	.controller(HomeControllerName,HomeController).name;