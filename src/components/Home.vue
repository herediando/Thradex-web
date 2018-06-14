<template>
<div>
  <Navbar />
  <v-carousel>
    <v-carousel-item  v-for="(slide,i) in slides" :src="slide.src" :key="i">
      <v-btn :to="slide.route" :color="slide.color" class="conozca-mas">See more</v-btn>
    </v-carousel-item>
  </v-carousel>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="green-header">Somos </span>Thradex</h1>
      <p>
        Tras una década participando en el diseño y ejecución de proyectos de telecomunicaciones e
        infraestructura, nos consolidamos como una empresa integradora de soluciones para
        emprendimientos del sector público y privado,  basados en  la tecnología, ingeniería y la
        experiencia de nuestro equipo de trabajo.
      </p>
    </v-flex>
  </v-layout>
  </div>
 <div class="fondo">
   <v-carousel id="carousel-frases" hide-controls hide-delimiters>
     <v-carousel-item
      v-for="(frase,i) in frases"
      :key="i"
     >
     <div class="frase-container">
       <div >
        <img class="frase-image" width="80px" src="../assets/logo-thradex.png" alt="">
       </div>
      <h3 class="frase-text"><v-icon x-large class="comillas">mdi-format-quote-open</v-icon> {{frase.text}}...<v-icon x-large class="comillas">mdi-format-quote-close</v-icon></h3>
     </div>
     </v-carousel-item>
   </v-carousel>
  </div>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="green-header">Lo </span>que <span class="green-header">hacemos</span></h1>
      <p>
        Nuestra metodología esta centrada en comprender la necesidad de nuestros
         clientes, identificar los problemas que afectan su rendimiento y proponer
          soluciones oportunas e integradas
      </p>
          <v-layout row wrap>
            <v-flex xs6 md3 v-for="(cualidad,i) in cualidades" :key="i">
              <div class="img__wrap">
                <img class="img__img" :src="require(`../assets/cualidades/${cualidad.image}.png`)" alt="">
                <p  :style="{backgroundColor : cualidad.color}" class="img__description">{{cualidad.text}}</p>
              </div>
            </v-flex>
          </v-layout>
    </v-flex>
  </v-layout>
  </div>
    <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="green-header">Business </span>Units</h1>
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
                <v-btn to="/telecom" color="cyan" dark flat>see more</v-btn>
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
                <v-btn to="/construccion" color="primary" dark flat>see more</v-btn>
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
                <v-btn to="/comercio" color="amber" dark flat>see more</v-btn>
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
      <h1><span class="green-header">Nuestros </span>Clientes</h1>
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
  data: () => ({
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
    cualidades: [
      {
        color: "#ffc916",
        image: "experiencia",
        text: "Más de 10 años en proyectos de Telecom, TI y construcción "
      },
      {
        color: "#ff4c71",
        image: "eficiencia",
        text:
          "Logística internacional para la implementación de proyectos de ingeniería"
      },
      {
        color: "#00c198",
        image: "calidad",
        text: "Procesos orientados a la Norma ISO 9001"
      },
      {
        color: "#ff4b0e",
        image: "recursos",
        text:
          "Contamos con recursos locales disponibles en Perú, Estados Unidos y Brasil "
      }
    ]
  }),
  components: { Navbar }
};
</script>
<style scoped>
.conozca-mas {
  position: absolute;
  bottom: 50px;
  left: 50px;
}
body {
  font-family: "Raleway", sans-serif;
}

h1 {
  color: #cccccc;
  font-size: 48px;
  font-weight: 300;
  margin-top: 20px;
}
.green-header {
  color: #66cb0a;
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
  background: url("../assets/fondo-green.png");
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
  color: #edf6f5;
  font-size: 1.5em;
  font-family: "Noto Sans", sans-serif;
}
#carousel-frases {
  height: 300px;
}
.comillas {
  font-size: 40px;
  color: white;
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
  font-size: 14px;
  color: white;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}
</style>
