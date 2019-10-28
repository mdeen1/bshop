<template>
  <div class="footer-navigation">
    <div class="row">
      <div class="col col--1of2">
        <div class="row">
          <div class="col col--1of3 standart-list">
            <ul>
              <li
                v-for="( item, i ) in footerData.dataLinks.links.rowOne"
                :key="item.title + i">
                <router-link :to="item.link">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
          <!-- /.col col-/-1of3 .standart-list -->

          <div class="col col--1of3 standart-list">
            <ul>
              <li
                v-for="( item, i ) in footerData.dataLinks.links.rowTwo"
                :key="item.title + i">
                <router-link :to="item.link">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
          <!-- /.col col-/-1of3 .standart-list -->

          <div class="col col--1of3 standart-list">
            <ul>
              <li
                v-for="( item, i ) in footerData.dataLinks.links.rowThree"
                :key="item.title + i">
                <router-link :to="item.link">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
          <!-- /.col col-/-1of3 .standart-list -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.col col-/-1of2 -->

      <div class="col col--1of2">
        <div class="row">
          <div class="col col--1of2">
            <div class="footer__list-heading">
              <router-link :to="footerData.storeInfo.link">{{footerData.storeInfo.heading}}</router-link>
            </div>

            <ul class="store-info">
              <li
                v-for="( item, i ) in footerData.storeInfo.list"
                :key="item.title + i">
                <div
                  v-if="item.link"
                  class="footer__list-icon">
                  <i class="material-icons">{{item.ico}}</i>

                  <router-link :to="item.link">

                    <span class="ico__title">{{item.title}}</span>
                  </router-link>
                </div>
                <!-- /.footer__list-icon -->

                <div
                  v-else
                  class="footer__list-icon">
                  <i class="material-icons">{{item.ico}}</i>

                  <span class="ico__title">{{item.title}}</span>
                </div>
                <!-- /.footer__list-icon -->
              </li>
            </ul>
            <!-- /.footer__list-heading -->
          </div>
          <!-- /.col col-/-1of2 -->

          <div class="col col--1of2">
            <div class="footer__list-heading">{{footerData.socials.heading}}</div>
            <!-- /.footer__list-heading -->

            <ul class="footer__socials-list">
              <li
                v-for="( item, index ) in footerData.socials.list"
                :key="item.ico + index">
                <router-link :to="item.link">
                  <i :class=item.ico />
                </router-link>
              </li>
            </ul>
            <!-- /.footer__socials-list -->
          </div>
          <!-- /.col col-/-1of2 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.col col-/-1of2 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.footer-navigation -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'AppFooterNavigation',

  /**
   * The properties that can be passed to the component.
   *
   * @type {Object}
   */
  props: {
    footerData: {
      type: null,
      required: true,
      default: () => {}
    }
  }
}
</script>
