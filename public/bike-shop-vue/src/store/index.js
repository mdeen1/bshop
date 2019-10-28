/**
 * @ The external dependencies.
 */
import Vue from 'vue';
import Vuex from 'vuex';

/**
 * @ The internal dependencies.
 */
import global from './modules/global';
import ui from './modules/ui';

/**
 * @ Install the plugins.
 */
Vue.use(Vuex);

/**
 * @ Setup the store.
 */
const store = new Vuex.Store({
	modules: {
		global,
    ui
	}
});

export default store;