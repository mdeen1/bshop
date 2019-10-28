<template>
  <div class="clickbait">
    <div class="clickbait__image">
      <img :src="require(`@/assets/images/basic/${data.divider}`)" :alt="data.paragraph">
    </div>
    <!-- /.clickbait__image -->

    <div class="clickbait__content">
      <div class="clickbait__content-wrapper">
        <img :src="require(`@/assets/images/basic/${data.logo}`)" :alt="data.paragraph">

        <p class="clickbait__paragraph">{{data.paragraph}}</p>

        <base-button :data="button"/>
      </div>
      <!-- /.clickbait__content-wrapper -->
    </div>
    <!-- /.clickbait__content -->
  </div>
  <!-- /.clickbait -->
</template>

<script>
/**
* Importing the internal dependecies.
*/
import BaseButton from '@/components/templates/BaseButton'

export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'Clickbait',
  /**
   * The internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    button: {
      'title': 'SHOP NOW',
      'url': '/',
      'styles': 'btn btn--lg',
      'iconRight': 'true'
    }
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
    }
  },
  /**
   * The imported components.
   *
   * @type {Object}
   */
  components: {
    BaseButton
  }
}
</script>
