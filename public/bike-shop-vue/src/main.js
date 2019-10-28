/**
* Importing the internal dependecies.
*/
import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';

/**
* Importing the external dependecies.
*/
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

/**
 * Load styles.
 */
import '@/assets/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');