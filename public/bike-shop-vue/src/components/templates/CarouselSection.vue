<template>
  <div
    class="carousel-section"
    :class=bgColor
  >
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <swiper-slide
        v-for="( item, i ) in slides"
        :key="'item' + i"
        >
        <div class="callout-carousel container-fluid">
          <div class="callout-carousel__image"
            :style="{
              'background-image': `url(${require(`@/assets/images/${item.image}`)})`
            }" />
            <!-- /.callout-carousel__image -->

          <div class="callout-carousel__intro">
            <h3 class="callout-carousel__heading">{{item.copy}}</h3>
            <!-- /.callout-carousel__heading -->
          </div>
          <!-- /.callout-carousel__intro -->

          <div class="callout-carousel__author">
            <span>{{item.author}}</span>
          </div>
          <!-- /.callout-carousel__author -->
        </div>
        <!--/.callout-carousel .container-fluid -->
      </swiper-slide>

      <!-- Swiper Button Go Previous -->
      <div class="swiper-button-prev" slot="button-prev"></div>

      <!-- Swiper Button Go Next -->
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
<!-- /.carousel-section -->
</template>

<script>
/**
* Importing the external dependecies.
*/
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  /**
  * The name of the component.
  *
  * @type {String}
  */
  name: 'CarouselSection',

  /**
  * The properties that can be passed to the component.
  *
  * @type {Object}
  */
  props: {
    bgColor: {
      type: null,
      required: false,
      default: () => {}
    }
  },

  /**
  * The internal state of the component.
  *
  * @return {Object}
  */
  data: () => ({
    swiperOption: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true
    },
    slides: [
      {
        copy: 'I loved the service, the range of products and the overall atmosphere in your store. All I needed for my sporting was a set of nice backpacks with good quality material. You guys are real professionals. I found everything here, in one place. Thanks',
        author: '-- Mark',
        image: 'users/rider-01.jpg'
      },
      {
        copy: 'Perfect! Friendly owners, INCREDIBLE customer service and competitive prices. Delivery with a standard delivery took over a week. Fit was perfect. Good looking helmet. Top notch.',
        author: '-- Gloria Man',
        image: 'users/rider-02.jpg'
      },
      {
        copy: 'We love JBS. We have always had very good luck with everything we have purchased. Their customer support is outstanding and very knowledgeable. I always check here first before looking any where else for my sport equipment.',
        author: '-- Jessie',
        image: 'users/rider-03.jpg'
      }
    ]
  }),
  /**
  * The imported components.
  *
  * @type {Object}
  */
  components: {
    swiper,
    swiperSlide
  }
}
</script>
