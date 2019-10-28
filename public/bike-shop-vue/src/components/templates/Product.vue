<template>
  <div class="product">
    <div class="product__head">
      <div class="product__images">
        <img
          :src="require(`@/assets/images/shop/${data.images.primary}`)"
          :alt="data.title"
          class="product__images--primary">

        <img
          :src="require(`@/assets/images/shop/${data.images.secondary}`)"
          :alt="data.title"
          class="product__images--secondary">
      </div>
      <!-- /.product__images -->

      <div
        v-if="data.tags"
        class="product__tags">
        <ul>
          <li v-if="data.tags.sale" class="product__tag text-center product__tag--sale">
            <span>on sale</span>
          </li>
          <!-- /.product__tag product__tag-/-sale -->

          <li v-if="data.tags.pack" class="product__tag text-center product__tag--pack">
            <span>pack</span>
          </li>
          <!-- /.product__tag product__tag-/-pack -->
        </ul>
      </div>
      <!-- /.product__tags -->
    </div>
    <!-- /.product__head -->

    <div class="product__body">
      <div class="product__actions">
        <div>
          <a href="#" title="Add to shopping cart" class="product__actions-link">
            <i class="material-icons">add_shopping_cart</i>
          </a>
        </div>

        <div>
          <a href="#" title="Add to compare" class="product__actions-link">
            <i class="material-icons">repeat</i>
          </a>

          <a href="#" title="Add to my watchlist" class="product__actions-link">
            <i class="material-icons">cloud_queue</i>
          </a>

          <a href="#" title="View this product" class="product__actions-link">
            <i class="material-icons">visibility</i>
          </a>
        </div>
      </div>
      <!-- /.product__actions -->

      <div class="product__body-content">
        <router-link
          class="product__link text-center"
          :to="data.link"
          v-html="data.title" />

        <div class="product__pricing text-center">
          <span class="text--bold" v-html="data.price.current" />

          <span class="text--grey" v-html="data.price.expired" />

          <span class="text--primary pricing--discount" v-html="data.price.discount" />
        </div>
        <!-- /.product__pricing .text-center -->
      </div>
      <!-- /.product__body-content -->
    </div>
    <!-- /.product__body -->
  </div>
  <!-- /.product -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'Product',
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
