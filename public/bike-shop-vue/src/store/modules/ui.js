/**
 * The supported mutations types.
 *
 * @type {string}
 */
const UI_OPEN_MODAL = 'ui/open-modal';
const UI_CLOSE_MODAL = 'ui/close-modal';

/**
 * Initial state of the module.
 *
 * @type {Object}
 */
const state = {
	modal: {
		isOpen: false,
		component: null,
		modifiers: null,
		types: {
			SearchBar: 'SearchBar',
			ShoppingCart: 'ShoppingCart'
		}
	}
}

const actions = {
	openModal: ({ commit }, payload) => {
		commit(UI_OPEN_MODAL, payload);
	},
	closeModal: ({ commit }) => {
		commit(UI_CLOSE_MODAL);
	}
}

const mutations = {
	[UI_OPEN_MODAL]: (state, { component, modifiers = null }) => {
		state.modal.isOpen = true;
		state.modal.component = component;
		state.modal.modifiers = modifiers;
	},
	[UI_CLOSE_MODAL]: (state) => {
		state.modal.isOpen = false;
		state.modal.component = null;
		state.modal.modifiers = null;
	}
}

/**
 * Get some information from the state.
 *
 * @type {Object}
 */
const getters = {
	getModalState: state => state.modal
};

export default {
	state,
	actions,
	mutations,
	getters
}