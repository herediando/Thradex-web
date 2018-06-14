<template>
<div>
  <AboutNavbar/>
  <div class="section">
      <v-layout row wrap class="text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="green-header">Nuestros </span>Clientes</h1>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(cliente,i) in clientes" :key="i*2">
            <img style="max-width:150px;" :src="require(`@/assets/clientes/${cliente.src}.png`)" alt="cliente">
          </swiper-slide>
        </swiper>
      </v-flex>
    </v-layout>
    </div>
</div>
</template>
<script>
import AboutNavbar from "@/components/AboutNavbar";
export default {
  data: () => ({
    clientes: [
      { src: "telefonica" },
      { src: "telxius" },
      { src: "embratel" },
      { src: "globenet" },
      { src: "century-link" },
      { src: "ciena" },
      { src: "infinera" },
      { src: "xtera" },
      { src: "logicalis" },
      { src: "italtel" },
      { src: "tmi" }
    ],
    swiperOptions: {
      slidesPerView: 5,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
      // init: false,
    }
  }),
  components: {
    AboutNavbar
  }
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #cccccc;
  font-size: 48px;
  font-weight: 300;
}
.green-header {
  color: #66cb0a;
}

.section {
  margin-top: 15px;
}

.section h2 {
  color: #a9a9a9;
  font-size: 30px;
  font-weight: 300;
}
.section p {
  color: #8a8a8a;
  font-size: 20px;
}
</style>
