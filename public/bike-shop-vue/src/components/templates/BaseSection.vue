<template>
  <section class="section">
    <div class="section__inner container-fluid">
      <div class="section__heading">
        <h3 class="section__title">{{title}}</h3>
        <!-- /.section__title -->
      </div>
      <!-- /.section__heading -->

      <div class="section__body">
        <slot name="body" />
      </div>
      <!-- /.section__body -->
    </div>
    <!-- /.section__inner container-fluid -->
  </section>
  <!-- /.section -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */

  name: 'BaseSection',
  /**
   * The properties that can be passed to the component.
   *
   * @type {Object}
   */
  props: {
    title: {
      type: null,
      required: true,
      default: () => {}
    }
  }
}
</script>
