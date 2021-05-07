<template>
  <div>
    <Navbar :settings="settings" />
    <img
      class="unidad-image"
      src="../assets/fondo-black-logo.png"
      height="600"
    />
    <div class="section">
      <!-- <v-layout row wrap class="text-xs-center">

    <div class="fondo text-xs-center">
        <v-carousel hide-delimiters>
        <v-carousel-item>
        <div class="frase-container">
          <v-layout row wrap>
            <v-flex xs12 >
              <div>
                <p class="big-number"><strong> 24x7</strong></p>
              </div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <p class="small-text">Monitoreamos, detectamos, reparamos y reportamos interrupciones. <br> (Todo el día, todos los días)</p>
            </v-flex>
          </v-layout>
        </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="frase-container">
              <v-layout row wrap>
                <v-flex xs8 offset-xs2>
                  <div>
                    <p class="big-text">Indicadores y métricas <br> relevantes</p>
                  </div>
                </v-flex>
              <v-flex xs8 offset-xs2>
                <p class="small-text">Nuestros ingenieros implementan todo lo que desea saber sobre su infraestructura de red y le brindan monitoreo, alertas, gráficos e informes que necesita para mantener una alta disponibilidad. Controlamos cualquier cosa y todo con una dirección IP utilizando un conjunto flexible de métricas</p>
              </v-flex>
            </v-layout>
          </div>
          </v-carousel-item>
        </v-carousel>
      </div> 
  </v-layout>-->
    </div>
    <div class="section">
      <v-layout row wrap class="text-xs-center">
        <v-flex xs10 offset-xs1>
          <div class="unit-wrapper mt-5">
            <h1><span class="black-header mt-2">Nuestros Servicios </span></h1>
            <v-container grid-list-xl>
              <v-layout row wrap justify-space-around>
                <v-flex
                  xs6
                  class="text-xs-center"
                  v-for="(servicio, i) in servicios"
                  :key="i"
                >
                  <v-icon class="ico">{{ servicio.icono }}</v-icon>
                  <h2>
                    <span class="black-header">{{ servicio.titulo }}</span>
                  </h2>
                  <p>{{ servicio.descripcion }}</p>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <div class="section text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="black-header">Nuestros Proyectos</span></h1>
        <p>
          Thradex está involucrada en diversas actividades
          comerciales,beneficiándose del conocimiento de mercado adquirido y de
          las habilidades profesionales de sus colaboradores. Llevando a cabo
          proyectos en ingeniería de telecomunicaciones y de construcción
        </p>
      </v-flex>
      <v-layout class="text-xs-center">
        <v-flex xs10 offset-xs1>
          <div class="unit-wrapper mt-5">
            <v-flex xs12>
              <v-container grid-list-xs>
                <v-layout justify-space-around row wrap>
                  <v-flex sm12 md6 v-for="(proyecto, i) in proyectos" :key="i">
                    <h2><span class="img__description">{{ proyecto.description }}</span></h2>
                    <div class="img__wrap">
                      <img
                        class="wr img__img"
                        :src="
                          require(`@/assets/telecom/proyectos/${proyecto.src}.jpg`)
                        "
                        alt=""
                      />
                      <div class="overlay">
                        <div class="text"></div>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <!-- <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
    <h1><span class="blue-header">Nuestros </span>Servicios</h1>
      <p>Nuestra metodología está centrada en entender la necesidad de nuestros clientes, identificar <br>
        los problemas que afectan su rendimiento y proponer soluciones integradas y oportunas</p>
      <div class="carousel-servicios">
      <carousel :perPage="1" :autoplay="true">
        <slide v-for="n in 6" :key="n">
          <img height="500px;" :src="require(`@/assets/services/${n}.png`)" alt="n">
        </slide>
      </carousel>
      </div>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs4 class="text-xs-center">
            <v-icon color="teal" class="mb-4" size="80">mdi-access-point-network</v-icon>
            <h2>Ingeniería & Diseño de Redes</h2>
            <p>Trabajamos para diseñar una red que se ajuste a sus necesidades, generando soluciones innovadoras para garantizar un óptimo rendimiento.</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
            <v-icon color="teal" class="mb-4" size="80">mdi-codepen</v-icon>
            <h2>Implementación de Red - EFI & T</h2>
            <p>Gestión de riesgos y caildad.Para garantizar un buen servicio a nuestros clientes, cubrimos todo el proceso de implementación, desde la compra de materiales primarios hasta configuraciones avanzadas, puesta en marcha y entrega final</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
            <v-icon color="teal" class="mb-4" size="80">mdi-wifi</v-icon>
            <h2>Servicios de operación & Mantenimiento de Red</h2>
            <p>Aportamos  el conocimiento y la experiencia requeridos para ……. Mecanismos de supervisión Soporte técnico contínuo</p>
        </v-flex>
      </v-layout>
    </v-container>
    </v-flex>
  </v-layout>
  </div> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  data: () => ({
    settings: {
      color: "cyan lighten-1",
      logo: "logo-celeste",
      dark: false
    },
    proyectos: [
      { description: "Diseño e implementacion de Datacenters", src: "2" },
      {
        description: "Instalación de Infraestructura para Datacenters",
        src: "7"
      },
      {
        description: "Instalacion de equipos de Telecomunicaciones",
        src: "6"
      },
      { description: "Servicios de Operación y Mantenimiento - NCS", src: "1" },
      {
        description: "Instalación de Planta de Energía DC y AC",
        src: "4"
      }
    ],
    servicios: [
      {
        titulo: "Soporte en Sitio - FLM",
        icono: "mdi-sitemap",
        descripcion:
          "Proveemos servicios de Soporte en Sitio FLM y Servicios NOC que permiten a nuestros clientes, operar sus redes de forma continua y eficiente, mientras que el enfoque se mantiene en el negocio. "
      },
      {
        titulo: "Operaciones de Red",
        icono: "mdi-account",
        descripcion:
          "Nuestros servicios incluyen auditoria y optimización de procesos de O&M de acuerdo a TM Forum y con herramientas OSS customizadas al escenario y procesos de nuestros clientes"
      }
    ]
  }),
  components: { Navbar }
};
</script>
<style scoped>
h1 {
  color: #cccccc;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 15px;
}
.black-header {
  color: #000000;
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
.unidad-image {
  width: 100%;
}
.section .big-text {
  font-size: 40px;
  color: #6fa8dc;
}
.section .big-number {
  font-size: 100px;
  color: #6fa8dc;
}
.section .small-text {
  padding-top: 10px;
}
.carousel {
  height: 400px;
}
.fondo {
  /* background: url("../assets/fondo-black.png") no-repeat; */
  /* background-size: cover; */
  width: 100%;
}
.fondo .small-text {
  color: rgb(0, 0, 0);
}
.frase-container {
  margin-top: 20px;
}
.img__description {
  font-size: 0.8em;
  color:#000000;
  margin-bottom: 5px;
}
.img__wrap {
  margin: 20px;
  position: relative;
}
.img__img {
   display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #0000005e;
}

.img__wrap:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.ico {
  /* margin: 50px; */
  padding: 20px;
  /* background-color: lightgreen; */
  font-size: 500%;
}
.ico:hover {
  /* margin: 50px; */
  padding: 23px;
  background-color: rgb(182, 193, 255);
  font-size: 500%;
}
</style>
