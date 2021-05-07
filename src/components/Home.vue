<template>
<div>
  <Navbar />
  <br><br><br>
  <v-carousel>
    <v-carousel-item  v-for="(slide,i) in slides" :src="slide.src" :key="i">
      <v-btn :to="slide.route" :color="slide.color" class="conozca-mas" style="text-transform: none;">Conozca más</v-btn>
    </v-carousel-item>
  </v-carousel>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <br>
      <br>
      <h1><span class="black-header"><b>Somos Thradex</b></span></h1>
      <p style="color:#474747;">
        Tras una década participando en proyectos de telecomunicaciones e infraestructura en el 
        sector público y privado, nos consolidamos como una empresa integradora de soluciones 
        basadas en tecnología e ingeniería.
      </p>
    </v-flex>
  </v-layout>
  </div>
  <br><br><br>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <!-- <h1><span class="green-header">Lo </span>que <span class="green-header">hacemos</span></h1>
      <p>
        Nuestra metodología esta centrada en comprender la necesidad de nuestros
         clientes, identificar los problemas que afectan su rendimiento y proponer
          soluciones oportunas e integradas
      </p> -->
          <v-layout row wrap>
            <v-flex xs6 md3>
              <div class="img__wrap">
            <!-- <v-flex xs6 md3 v-for="(cualidad,i) in cualidades" :key="i"> -->
                <v-icon class="ico">mdi-chart-line</v-icon>
                <p>Más de 10 años en proyectos de Telecom, TI y construcción </p>
                <!-- <img class="img__img" :src="require(`../assets/cualidades/${cualidad.image}.png`)" alt=""> -->
                <!-- <p  style='backgroundColor: #4c4c4c' class="img__description">Más de 10 años en proyectos de Telecom, TI y construcción </p> -->
              </div>
            </v-flex>
            <v-flex xs6 md3>
              <div class="img__wrap">
                <v-icon class="ico">mdi-factory</v-icon>
                <p>Logística internacional para la implementación de proyectos</p>
                <!-- <p  style='backgroundColor: #4c4c4c' class="img__description">Logística internacional para la implementación de proyectos de ingeniería</p> -->
              </div>
            </v-flex>
            <v-flex xs6 md3>
              <div class="img__wrap">
                <v-icon class="ico">mdi-briefcase-check</v-icon>
                <p>Procesos orientados a la Norma ISO 9001</p>
                <!-- <p  style='backgroundColor: #4c4c4c' class="img__description">Procesos orientados a la Norma ISO 9001 </p> -->
              </div>
            </v-flex>
            <v-flex xs6 md3>
              <div class="img__wrap">
                <v-icon class="ico">mdi-account-multiple</v-icon>
                <p>Contamos con recursos en Perú, Estados Unidos y Brasil</p>
                <!-- <p  style='backgroundColor: #4c4c4c' class="img__description">Contamos con recursos locales disponibles en Perú, Estados Unidos y Brasil</p> -->
              </div>
            </v-flex>
            <br>
          </v-layout>
          <br>
    </v-flex>
    <br>
  </v-layout><br><br>
  <!--   <br><br>  <br><br>
      <img width="100%" src="../assets/historia.png" alt=""> -->
  </div>
  <!-- <div class="fondo" width="100px">
   <v-carousel id="carousel-frases" hide-controls hide-delimiters>
     <v-carousel-item
      v-for="(frase,i) in frases"
      :key="i"
     >
     <div class="frase-container">
       <!-- <div >
        <img class="frase-image" width="80px" src="../assets/logo-thradex.png" alt="">
       </div> 
      <h3 class="frase-text"><v-icon x-large class="comillas">mdi-format-quote-open</v-icon> {{frase.text}}...<v-icon x-large class="comillas">mdi-format-quote-close</v-icon></h3>
     </div>
     </v-carousel-item>
   </v-carousel>
  </div> -->
  
    <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <br>
      <h1><span class="black-header">Unidades de Negocio</span></h1>
      <p>Tenemos experiencia en gestión de proyectos orientados a una amplia variedad de sectores y
        actividades, teniendo como principal objetivo la satisfacción de nuestros clientes a través de
        atención personalizada y eficiente.</p>
       <v-container class="business-units" grid-list-xl>
          <v-layout row wrap>
          <v-flex xs12 sm12 md4>
            <v-card>
              <v-card-media
                height="300px"
                :src="require('@/assets/telecom.png')"
              >
              </v-card-media>
              <v-card-actions>
                <v-btn to="/telecom" color="cyan" dark flat style="text-transform: none;">Conozca más</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12  sm12 md4>
            <v-card>
              <v-card-media
                height="300px"
                :src="require('@/assets/construccion.png')"
              >
              </v-card-media>
              <v-card-actions>
                <v-btn to="/construccion" color="primary" dark flat style="text-transform: none;">Conozca más</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12  sm12 md4>
            <v-card>
              <v-card-media
                height="300px"
                :src="require('@/assets/comercio.png')"
              >
              </v-card-media>
              <v-card-actions>
                <v-btn to="/comercio" color="amber" dark flat style="text-transform: none;">Conozca más</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
       </v-container>
    </v-flex>
  </v-layout>
  </div>
  <div class="section">
      <v-layout row wrap class="text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="black-header">Lo que hacemos</span></h1>
        <p>Brindamos servicios para clientes en todo el mundo, aportando nuestra experiencia y visión local del mercado con el objetivo de concretar exitosamente nuestros proyectos,  superando así, las expectativas de nuestros clientes.
          <br/><br/> Actualmente, nuestros partners de negocios aseguran una capacidad de operación en todo el Perú y en los países de Latinoamérica y el Caribe.</p>
      </v-flex>
    </v-layout>
  </div>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="black-header">Nuestros Clientes</span></h1>
      <carousel :autoplay="true" class="clientes-carousel" :perPageCustom="[[768,2],[1024,5]]">
        <slide v-for="(cliente,i) in clientes" :key="i">
          <img style="max-height:80px;" :src="require(`@/assets/clientes/${cliente.src}.png`)" alt="cliente">
        </slide>
      </carousel>
    </v-flex>
  </v-layout>
  </div>
</div>
</template>
<script>

import Navbar from "@/components/Navbar";
export default {
  mounted(){
    $(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
  },
  data: () => ({
    ok:0,
    drawer: false,
    slides: [
      {
        src: "https://i.imgur.com/3Ef0K4o.jpg",
        color: "cyan lighten-1",
        route: "/telecom"
      },
      {
        src: "https://i.imgur.com/b5AhWwB.jpg",
        color: "blue lighten",
        route: "/construccion"
      },
      {
        src: "https://i.imgur.com/ltzkOxa.jpg",
        color: "orange lighten-1",
        route: "/comercio"
      }
    ],
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
    frases: [
      {
        text:
          "Somos el socio comercial que necesita para convertir sus  ideas en un plan de acción"
      },
      {
        text:
          "Escuchamos a nuestros clientes y porque cada uno de ellos es especial, creamos soluciones personalizadas"
      },
      { text: "Estamos donde el cliente nos necesita" }
    ],
    // cualidades: [
    //   {
    //     color: "#ffffff",
    //     image: "experiencia",
    //     text: "Más de 10 años en proyectos de Telecom, TI y construcción "
    //   },
    //   {
    //     color: "#ffffff",
    //     image: "eficiencia",
    //     text:
    //       "Logística internacional para la implementación de proyectos de ingeniería"
    //   },
    //   {
    //     color: "#ffffff",
    //     image: "calidad",
    //     text: "Procesos orientados a la Norma ISO 9001"
    //   },
    //   {
    //     color: "#ffffff",
    //     image: "recursos",
    //     text:
    //       "Contamos con recursos locales disponibles en Perú, Estados Unidos y Brasil "
    //   }
    // ]
  }),
  components: { Navbar }
  };
</script>
<style scoped>
.ico {
  padding: 20px;
  font-size: 500%;
} .ico:hover {
  padding: 20px;
  background-color: rgb(182, 193, 255);
  font-size: 500%;
}   
.conozca-mas {
  position: absolute;
  bottom: 50px;
  left: 50px;
}

body {
  font-family: "Oswald";
}

h1 {
  color: #cccccc;
  font-size: 48px;
  font-weight: 300;
  margin-top: 20px;
}
.black-header {
  color: #000000;
}

.section {
  margin-top: 20px;
}

.section p {
  color: #8a8a8a;
  font-size: 20px;
}

.clientes-carousel {
  margin-top: 50px;
}

.business-units {
  margin-top: 50px;
}

.green-active-button {
  background: #66cb0a;
}
.application {
  background: white;
}
.somos-image {
  width: 80%;
}
.fondo {
  background: url("../assets/footer-image.png");
  text-align: center;
}
.frase-container {
  position: absolute;
  width: 500px;
  height: 200px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -120px 0 0 -250px;
}
.frase-text {
  margin-top: 15px;
  color: #000000;
  font-size: 2em;
  font-family: "Noto Sans", sans-serif;
}
#carousel-frases {
  height: 300px;
}
.comillas {
  font-size: 35px;
  color: rgb(0, 0, 0);
}
.img__img {
  max-width: 80%;
}

.img__description {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
  background: #cccccc;
  padding: 10px;
}
.img__wrap p {
  font-size: 18px;
  color: rgb(0, 0, 0);
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}
</style>
