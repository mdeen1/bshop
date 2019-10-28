<template>
  <div class="modal">
    <div class="modal__close">
      <button class="modal__close-btn" @click.prevent="closeModal"/>

    </div>
    <!-- /.modal-close -->

    <div class="search__container">
      <input class="search__input" type="text" placeholder="Search..">

      <router-link @click.native="closeModal" class="btn btn--mini" to="/search-result">Search</router-link>
    </div>
    <!-- /.search-container -->
  </div>
</template>

<script>
/**
 * The external dependencies.
 */
import { mapActions } from 'vuex'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'SearchBar',

  /**
   * The public API of the component.
   *
   * @type {Object}
   */
  methods: {
    ...mapActions([
      'closeModal'
    ])
  }
}
</script>
