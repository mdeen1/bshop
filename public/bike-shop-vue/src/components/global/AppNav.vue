<template>
  <nav class="navigation">
    <div class="navigation__inner">
      <ul class="navigation__list container-fluid">
        <li
          v-if="data"
          v-for="( item, i ) in data"
          :key="i + '1'"
          :class="{
            'navigation__item': true,
            'navigation__item--indicator': item.dropdown
          }"
        >
          <router-link :to="item.link">
            {{item.title}}

            <i
              v-if="item.dropdown"
              class="material-icons">expand_more</i>
          </router-link>

          <div
            v-if="item.dropdown"
            :class="{
              navigation__dropdown: true,
              row: true,
              'extended': item.dropdown.advanced
            }">
            <ul
              v-if="item.dropdown.advanced"
              v-for="( el, i ) in item.dropdown.advanced"
              :key="i + '1'"
              class="col col--1of4">
              <li
                v-for="( links, i ) in el.data"
                :key="i + '1'"
                :class="{
                  'dropdown__item': true,
                  'navigation__dropdown-title': !links.link
                }">
                <span
                  v-if="!links.link"
                  v-html="links.title"
                />
                <router-link
                  v-if="links.link"
                  :to="links.link"
                  v-html="links.title" />
              </li>
              <!-- /.navigation__dropdown-title -->
            </ul>
            <!-- /.col col-/-1of4 -->

            <ul
              v-if="item.dropdown.standart"
              v-for="( el, i ) in item.dropdown.standart"
              :key="i + '1'"
              class="col col--1of2">
              <li
                v-for="( links, i ) in el.data"
                :key="i + '1'"
                class="dropdown__item">
                <router-link
                  v-if="links.link"
                  :to="links.link"
                  v-html="links.title" />
              </li>
              <!-- /.dropdown__item -->
            </ul>
            <!--/.col .col--1of2 -->
          </div>
          <!-- /.navigation__dropdown .row -->
        </li>
        <!--/.navigation__item -->
      </ul>
      <!--/.navigation__list -->
    </div>
    <!-- /.navigation__inner .container-fluid -->
  </nav>
  <!-- /.navigation -->
</template>

<script>
/**
 * @ The external dependencies.
 */
import { mapGetters } from 'vuex'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'AppNav',

  /**
   * The dynamic properties of the component
   *
   * @type {Object}
   */
  computed: {
    ...mapGetters({
      data: 'getNavData'
    })
  }
}
</script>
