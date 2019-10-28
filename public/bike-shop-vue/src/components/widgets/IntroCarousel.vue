<template>
  <div class="intro-carousel">
    <div class="intro-carousel__slide intro-carousel__slide--secondary">
      <div class="intro-carousel__entry">
        <h1 class="title__paragraph text--thinner">{{slides[0].title}}</h1>

        <h1 class="title__paragraph">{{slides[0].subtitle}}</h1>

        <p class="exerpt__paragraph">{{slides[0].exerpt}}</p>

        <!-- <a href="#" class="btn btn--lg">{{slides[0].action}} <i class="fas fa-arrow-right"></i></a> -->

        <base-button :data="slides[0].action" />

        <div class="shape" />
        <!--/.shape -->

        <ul class="intro-carousel__pagination">
          <li class="active">
            <a href="#">01</a>
          </li>

          <li>
            <a href="#">02</a>
          </li>

          <li>
            <a href="#">03</a>
          </li>
        </ul>
        <!-- /.intro-carousel__pagination -->
      </div>
      <!-- /.intro-carousel__entry -->

      <div class="intro-carousel__image">
        <img :src="require(`@/assets/images/basic/${slides[0].image}`)" alt="">
      </div>
      <!-- /.intro-carousel__image -->
    </div>
    <!-- /.intro-carousel__slide -->
  </div>
  <!-- /.intro-carousel -->
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
  name: 'IntroCarousel',
  /**
   * The internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    slides: [
      {
        'image': 'mountainbike-1.png',
        'title': 'MEET OUR NEW',
        'subtitle': 'GEOMETRY & GEARING',
        'exerpt': 'Let\'s face it: the most glarious gravel rides aren\'t always glamorous, and the grittiest adventures requires extra gear.',
        'action': {
          'title': 'DISCOVER NOW',
          'url': '/',
          'styles': 'btn btn--lg',
          'iconRight': 'true'
        }
      },
      {
        'image': 'mountainbike-2.png',
        'title': 'CROSS COUNTRY',
        'subtitle': 'MOUNTAIN BIKES',
        'exerpt': 'No surprise that our mountain bikes are the most technologically advanced on the market.',
        'action': {
          'title': 'DISCOVER NOW',
          'url': '/',
          'styles': 'btn btn--lg',
          'iconRight': 'true'
        }
      },
      {
        'image': 'mountainbike-3.png',
        'title': 'CHOOSE YOUR',
        'subtitle': 'GEOMETRY & GEARING',
        'exerpt': 'No surprise that our mountain bikes are the most technologically advanced on the market.',
        'action': {
          'title': 'DISCOVER NOW',
          'url': '/',
          'styles': 'btn btn--lg',
          'iconRight': 'true'
        }
      }
    ]
  }),
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
