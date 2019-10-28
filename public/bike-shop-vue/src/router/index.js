/**
 * Importing the internal dependecies.
*/
import Vue from 'vue';
import Router from 'vue-router';

/**
 * Importing the internal Routers Views.
*/
import Home from '@/views/Home';

Vue.use(Router);

/**
* Exporting the Routers.
*/
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}
	]
});