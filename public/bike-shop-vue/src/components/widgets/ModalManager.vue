<template>
  <div v-if="modal.isOpen" :class="['modal-manager', modal.modifiers]">
    <div class="modal-manager__inner">
      <component :is="modal.component" />
    </div>
  </div>
</template>

<script>
/**
 * The external dependencies.
 */
import { mapGetters } from 'vuex'

/**
 * The internal dependencies.
 */
import SearchBar from '@/components/modals/SearchBar'
import ShoppingCart from '@/components/modals/ShoppingCart'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'ModalManager',

  /**
   * The imported components.
   *
   * @type {Object}
   */
  components: {
    SearchBar,
    ShoppingCart
  },

  /**
   * The dynamic properties of the component
   *
   * @type {Object}
   */
  computed: {
    ...mapGetters({
      modal: 'getModalState'
    })
  }
}
</script>
