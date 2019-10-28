<template>
  <footer class="footer">
    <div class="footer__inner container-fluid">
      <newsletter />

      <app-footer-navigation :footerData="footerData" />
    </div>
    <!-- /.footer__inner container-fluid -->
  </footer>
  <!-- /.footer -->
</template>

<script>
/**
 * @ The external dependencies.
 */
import { mapGetters } from 'vuex'

/**
 * Importing the internal dependecies.
 */
import Newsletter from '@/components/widgets/Newsletter'
import AppFooterNavigation from '@/components/global/AppFooterNavigation'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'AppFooter',

  /**
   * The imported components.
   *
   * @type {Object}
   */
  components: {
    Newsletter,
    AppFooterNavigation
  },

  /**
   * The dynamic properties of the component
   *
   * @type {Object}
   */
  computed: {
    ...mapGetters({
      footerData: 'getFooterData'
    })
  }
}
</script>
