<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__inner">
        <div class="header__controls">
          <Dropdown titleColorGray arrow :data="langData" />

          <Dropdown titleColorGray arrow :data="currData" />

          <div class="store-contact">
            <p>Store Contact: <a href="mobile:+44444444">+44 751-8866212</a></p>
          </div>
          <!-- /.store-contact -->
        </div>
        <!-- /.header__controls -->

        <div class="header__logo">
          <router-link :to="{ path: '/' }">
            <img src="@/assets/images/basic/logo.jpg" alt="Bike Shop Logo">
          </router-link>
        </div>
        <!-- /.header__logo -->

        <div class="header__actions">
          <ul>
            <li>
              <a
                @click.prevent="openModal({
                  component: modal.types.SearchBar,
                  modifiers: 'modal--search-bar'
                })"
                type="button">
                <i class="material-icons">search</i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="material-icons">person_outline</i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="material-icons">star_border</i>

                <div class="qnty">2</div>
                <!-- /.qnty -->
              </a>
            </li>

            <li class="shopping-cart">
              <a href="#">
                <i class="material-icons">shopping_cart</i>

                <div class="qnty">1</div>
                <!-- /.qnty -->
              </a>
            </li>
            <!--/.shopping-cart -->
          </ul>
        </div>
        <!-- /.header__actions -->
      </div>
      <!-- /.header__inner -->
    </div>
    <!-- /.container-fluid -->
  </header>
  <!-- /.header .container-fluid-->
</template>

<script>
/**
 * Importing The external dependencies.
 */
import { mapActions, mapGetters } from 'vuex'

/**
 * Importing the internal dependecies.
 */
import Dropdown from '@/components/widgets/Dropdown'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'AppHeader',

  /**
   * The internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    isCartOpen: false,
    langData: {
      title: 'EN',
      body: [
        {
          title: 'EN'
        },
        {
          title: 'DE'
        },
        {
          title: 'RU'
        },
        {
          title: 'ES'
        },
        {
          title: 'FR'
        }
      ]
    },
    currData: {
      title: 'USD $',
      body: [
        {
          title: 'USD'
        },
        {
          title: 'GBP'
        },
        {
          title: 'EUR'
        }
      ]
    }
  }),

  /**
   * The imported components.
   *
   * @type {Object}
   */
  components: {
    Dropdown
  },

  /**
   * The public API of the component.
   *
   * @type {Object}
   */
  methods: {
    ...mapActions([
      'openModal'
    ])
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
