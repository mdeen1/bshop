<template>
  <div class="container-fluid">
    <div class="brand-slider">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="( item, i ) in sliderData"
          :key="item.title + i"
          class="brand-slider__image"
          :style="{
            'background-image': `url(${require(`@/assets/images/partners/${item.image}`)})`
          }"
        />
      </swiper>
      <!--/swiper -->
    </div>
    <!-- /.brand-slider -->
  </div>
  <!-- /.container-fluid -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {String}
   */
  name: 'BrandSlider',
  /**
   * The internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    swiperOption: {
      slidesPerView: 8,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    },
    baseUrl: '@/assets/images/partners/',
    sliderData: [
      {
        'title': 'bell',
        'image': 'bell.jpg'
      },
      {
        'title': 'cinelli',
        'image': 'cinelli.jpg'
      },
      {
        'title': 'felt',
        'image': 'felt.jpg'
      },
      {
        'title': 'gt',
        'image': 'gt.jpg'
      },
      {
        'title': 'ibera',
        'image': 'ibera.jpg'
      },
      {
        'title': 'ridley',
        'image': 'ridley.jpg'
      },
      {
        'title': 'surly',
        'image': 'surly.jpg'
      }
    ]
  })
}
</script>
