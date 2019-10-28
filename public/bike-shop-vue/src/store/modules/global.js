/**
 * @ The internal dependencies.
 */
import nav from '@/lib/data/nav';
import footer from '@/lib/data/footer';

/**
 * Initial state of the module.
 *
 * @type {Object}
 */
const state = {
	nav: nav,
	footer: footer
}

/**
 * Get some information from the state.
 *
 * @type {Object}
 */
const getters = {
	getNavData: state => state.nav,
	getFooterData: state => state.footer
};

export default {
  state,
  getters
}