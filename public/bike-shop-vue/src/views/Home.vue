<template>
	<div class="router-view">
		<!-- Intro Carousel -->
		<intro-carousel />

		<!-- Brand Slider Carousel -->
		<brand-slider />
	
		<!-- Section for Hot Products -->
		<base-section title="Hot Products">
			<template slot="body">
				<div class="row">
					<div 
						v-for="( el,i ) in products"
						:key="el.id"
						class="col col--1of4">
						<product :data="el" />
					</div>
					<!-- /.col col-/-1of4 -->
				</div>
				<!-- /.row -->
			</template>
		</base-section>

		<!-- Clickbaite for Trek Products -->
		<clickbait :data="calloutTrek" />

		<!-- Section for Latest News -->
		<base-section title="Latest News">
			<template slot="body">
				<div class="row">
					<div 
						v-for="(item, i) in articles"
						:key="item.date + i"
						class="col col--1of3">
						<div class="article-box">
							<div class="article-box__head">
								<div 
									:style="{
										'background-image': `url(${require(`@/assets/images/articles/${item.image}`)})`
									}"
									class="article-box__overlay--image" />
								<!-- /.article-box__overlay-/-image -->
							</div>
							<!-- /.article-box__head -->

							<div class="article-box__body">
								<div class="article-box__date">{{item.date}}</div>
								<!-- /.article-box__date -->

								<router-link 
									class="article-box__action"
									:to="item.link"
									v-html="item.title"/>
								<!-- /.article-box__action -->
							</div>
							<!-- /.article-box__body -->
						</div>
						<!-- /.article-box -->
					</div>
					<!-- /.col col-/-1of3 -->
				</div>
				<!-- /.row -->
			</template>
		</base-section>

		<!-- Carousel - Testimonials from Drivers -->
		<carousel-section bgColor="bg--gray" />
	</div>
	<!--/.router-view -->
</template>

<script>
/**
 * Importing the internal dependecies.
 */
import IntroCarousel from "@/components/widgets/IntroCarousel";
import BrandSlider from '@/components/widgets/BrandSlider';
import BaseSection from "@/components/templates/BaseSection";
import Product from '@/components/templates/Product';
import Clickbait from '@/components/templates/Clickbait';
import CarouselSection from '@/components/templates/CarouselSection';

export default {
	/**
	* The name of the component.
	*
	* @type {String}
	*/
	name: 'Home',
	/**
	 * The internal state of the component.
	 *
	 * @return {Object}
	 */
	data: () => ({
		products: [
			{
				"id": "al-bike",
				"title": "Aluminum Road Bike",
				"link": "/",
				"tags": {
					"sale": "true",
					"pack": "true"
				},
				"price": {
					"current": "$288.00",
					"expired": "$320.00",
					"discount": " -10%"
				},
				"images": {
					"primary": "al_bike-01.jpg",
					"secondary": "al_bike-02.jpg"
				}
			},
			{
				"id": "ms-helmet",
				"title": "Fraction Multi-Sport Helmet",
				"link": "/",
				"tags": {
					"sale": "true"
				},
				"price": {
					"current": "$8.00",
					"expired": "$10.00",
					"discount": " -20%"
				},
				"images": {
					"primary": "ms_helmet-01.jpg",
					"secondary": "ms_helmet-02.jpg"
				}
			},
			{
				"id": "bs-helmet",
				"title": "Bell Solar Bike Helmet",
				"link": "/",
				"tags": {
					"sale": "true"
				},
				"price": {
					"current": "$16.00",
					"expired": "$20.00",
					"discount": " -20%"
				},
				"images": {
					"primary": "bs_helmet-01.jpg",
					"secondary": "bs_helmet-02.jpg"
				}
			},
			{
				"id": "bc-panniers",
				"title": "Bicycle Panniers",
				"link": "/",
				"tags": {
					"sale": "true"
				},
				"price": {
					"current": "$16.00",
					"expired": "$20.00",
					"discount": " -20%"
				},
				"images": {
					"primary": "bc-panniers-01.jpg",
					"secondary": "bc-panniers-02.jpg"
				}
			}
		],
		articles: [
			{
				"image": "shimano.jpg",
				"date": "April 13, 2018",
				"title": "NEW HEIGHTS: ANDES PACIFICO",
				"link": "/"
			},
			{
				"image": "speed.jpg",
				"date": "April 13, 2018",
				"title": "THE QUEST FOR THE GOLDEN SPEEDO",
				"link": "/"
			},
			{
				"image": "spring.jpg",
				"date": "April 10, 2018",
				"title": "GUIDE TO THE SPRING CLASSICS",
				"link": "/"
			}
		],
		calloutTrek: {
			"divider": "trek-divider.jpg",
			"logo": "trek-logo.png",
			"paragraph": "Meet our all-new gravel bike.",
			"linkTitle": "SHOP NOW",
			"linkLocation": "/"
		}
	}),
	/**
	 * The imported components.
	 * 
	 * @type {Object}
	 */
	components: {
		IntroCarousel,
		BrandSlider,
		BaseSection,
		Product,
		Clickbait,
		CarouselSection
	}
}
</script>