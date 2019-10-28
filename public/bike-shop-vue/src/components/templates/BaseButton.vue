<template>
  <div class="base-button">
    <a
      v-if="data.external"
      :href="data.url"
      :class="data.styles"
      target="_blank"
      v-html="data.title"
    />

    <router-link
      :to="data.url"
      :class="data.styles" >
      <span
        v-if="data.iconLeft"
        class="base-button__icon base-button__icon--left" >
        <i class="fas fa-arrow-left"></i>
      </span>

      <span>{{data.title}}</span>

      <span
        v-if="data.iconRight"
        class="base-button__icon base-button__icon--right" >
        <i class="fas fa-arrow-right"></i>
      </span>
    </router-link>
  </div>
  <!-- /.base-button -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'BaseButton',
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
  }
}
</script>
