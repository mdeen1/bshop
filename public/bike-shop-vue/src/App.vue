<template>
  <div class="wrapper">
    <div class="main__content">
      <app-header />

      <app-nav />

      <router-view />

      <app-footer />
    </div>
    <!-- /.main__content -->

    <modal-manager />
  </div>
</template>

<script>
/**
* Importing the internal dependecies.
*/
import AppHeader from '@/components/global/AppHeader.vue'
import AppNav from '@/components/global/AppNav.vue'
import AppFooter from '@/components/global/AppFooter.vue'
import ModalManager from '@/components/widgets/ModalManager'

export default {
  /**
  * The name of the component.
  *
  * @type {String}
  */
  name: 'App',

  /**
  * The imported components.
  *
  * @type {Object}
  */
  components: {
    AppHeader,
    AppNav,
    AppFooter,
    ModalManager
  }
}
</script>
