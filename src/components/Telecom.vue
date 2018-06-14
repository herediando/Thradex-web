<template>
<div>
  <Navbar :settings="settings" />
  <img class="unidad-image" src="../assets/idea-telecom.png" alt="">
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="blue-header">Lo </span>que <span class="blue-header">hacemos</span></h1>
    </v-flex>
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
  </v-layout>
  </div>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="blue-header">Nuestros </span>Servicios</h1>
     <v-container grid-list-xl>
      <v-layout row wrap justify-space-around>
        <v-flex xs6 class="text-xs-center" v-for="(servicio, i) in servicios" :key="i">
            <img src="../assets/cubito-azul.png">
            <h2>{{servicio.titulo}}</h2>
            <p>{{servicio.descripcion}}</p>
        </v-flex>
      </v-layout>
    </v-container>
    </v-flex>
  </v-layout>
  </div>
  <div class="section">
    <v-layout class="text-xs-center">
      <v-flex xs10 offset-xs1>
      <h1><span class="blue-header">Nuestros </span>Proyectos</h1>
      <p>Thradex está involucrada en diversas actividades comerciales,beneficiándose del conocimiento de mercado
        adquirido y de las habilidades profesionales <br> de sus colaboradores. Llevando a cabo
         proyectos en ingeniería de telecomunicaciones y de construcción</p>
      <v-flex xs12>
        <v-container grid-list-xs>
          <v-layout justify-space-around row wrap>
            <v-flex sm12 md6 v-for="(proyecto,i ) in proyectos" :key="i">
              <div class="img__wrap">
                <h2 class="img__description">{{proyecto.description}}</h2>
                <img class="img__img" :src="require(`@/assets/telecom/proyectos/${proyecto.src}.jpg`)" alt="">
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
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
      { description: "Servicios de Operación y Mantenimiento - NCS", src: "1" },
      { description: "Diseño e implementacion de Datacenters", src: "2" },
      {
        description: "Instalación de Infraestructura para Datacenters",
        src: "3"
      },
      { description: "Instalación de Planta de Energía DC y AC", src: "4" },
      {
        description:
          "Instalacion de equipos de telecomunicaciones y servidores",
        src: "6"
      }
    ],
    servicios: [
      {
        titulo: "On Site Support Services - FLM",
        descripcion:
          "Proveemos servicios de Soporte en Sitio FLM y Servicios NOC que permiten a nuestros clientes, operar sus redes de forma continua y eficiente, mientras que el enfoque se mantiene en el negocio. "
      },
      {
        titulo: "OUTSOURCING de Operaciones de Red",
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
.blue-header {
  color: #6fa8dc;
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

.cubitos-verdes {
  margin-top: 50px;
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
  background: url("../assets/fondo-black.png") no-repeat;
  background-size: cover;
  width: 100%;
}
.fondo .small-text {
  color: rgb(235, 235, 235);
}
.frase-container {
  margin-top: 20px;
}

.img__wrap h2 {
  font-size: 1.5em;
  margin-bottom: 5px;
}
.img__wrap {
  margin: 20px;
}
.img__img {
  max-width: 95%;
}
</style>
