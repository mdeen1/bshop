<template>
  <button
    :class="{
      'dropdown': true,
      'active': isActive
    }"
  >
    <div
      v-click-outside="closeDropdown"
      @click="toggleDropdown"
      :class="{
        'dropdown__head': true,
        'color--gray': titleColorGray
      }"
    >
      {{data.title}}

      <div
        v-if="arrow"
        class="dropdown__head-icon"
      >
        <i class="material-icons"> expand_more </i>
      </div>
      <!-- /.dropdown__head-icon -->
    </div>
    <!-- /.dropdown__head -->

    <div
      v-if="data.body"
      class="dropdown__body"
    >
      <div class="dropdown__body-inner">
        <ul>
          <li
            v-for="( el , i ) in data.body"
            :key="el.title + i"
          >
            <div class="tag">
              {{el.title}}
            </div>
            <!-- /.tag -->
          </li>
        </ul>
      </div>
      <!-- /.dropdown__body-inner -->
    </div>
    <!-- /.dropdown__body -->
  </button>
  <!-- /.dropdown -->
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'Dropdown',

  directives: {
    ClickOutside
  },

  /**
   * The internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    isActive: false
  }),

  /**
   * The properties that can be passed to the component.
   *
   * @type {Object}
   */
  props: {
    data: {
      type: null,
      required: true,
      default: () => {}
    },
    arrow: {
      type: Boolean,
      required: false,
      default: () => {}
    },
    titleColorGray: {
      type: Boolean,
      required: false,
      default: () => {}
    }
  },

  /**
   * The public API of the component.
   *
   * @type {Object}
   */
  methods: {
    toggleDropdown () {
      this.isActive = !this.isActive
    },

    closeDropdown () {
      this.isActive = false
    }
  }
}
</script>
