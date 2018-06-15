11<template>
<div>
  <Navbar :settings="settings" />
  <img class="unidad-image" src="../assets/idea-construccion.png" alt="">
  <div class="section">
    <v-layout row wrap class="text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="green-header">Lo</span> que <span class="green-header">hacemos</span></h1>
      </v-flex>
        <v-flex xs12 class="full__mensaje">
          <v-flex xs8 offset-xs2 >
            <p>Brindamos soluciones integrales que abarcan todo el ciclo de vida de los proyectos, mediante equipos multidisciplinarios de ingeniería, procura y gerencia de construcción</p>
          </v-flex>
        </v-flex>
    </v-layout>
  </div>
    <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
    <div class="unit-wrapper">
      <h1><span class="green-header">Nuestros </span>Servicios</h1>
      <v-flex xs8 offset-xs2>
        <p>Desde el 2011, la división de infraestructura y construcción ha experimentado un gran crecimiento, sobretodo en  el desarrollo de proyectos de obras civiles, saneamiento e infraestructura</p>
      </v-flex>
      <v-container grid-list-xl>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 class="text-xs-center" v-for="(servicio, i) in servicios" :key="i">
              <img src="../assets/cubito-azul.png" alt="">
              <h2>{{servicio.titulo}}</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-flex xs12 class="full__mensaje">
      <v-flex xs8 offset-xs2 >
        <p>Brindamos soluciones integrales que abarcan todo el ciclo de vida de los proyectos, mediante equipos multidisciplinarios de ingeniería, procura y gerencia de construcción</p>
      </v-flex>
      </v-flex>
    <Carousel :logos="logos"/>
    </v-flex>
  </v-layout>
  </div>

</div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel"
export default {
  data: () => ({
    settings: {
      color: "blue lighten",
      logo: "logo-azul",
      dark: false
    },
    logos: [
      {src: 'building-networks'},
      {src: 'foniprel'},
      {src: 'pcm'},
      {src: 'tmi'}
    ],
    servicios: [
      {titulo: "Infraestructura de Telecomunicaciones"},
      {titulo: "Infraestructura Civil"},
      {titulo: "Consultoría"}
     ]
  }),
  components: {Navbar, Carousel}
};
</script>
<style scoped>
h1 {
  color: #cccccc;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 40px;
}
.green-header {
  color: #2196f3;
}

.section {
  margin-top: 80px;
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

.unit-wrapper {
  border-left:12px #3c78d8 solid;
}

.full__mensaje {
  border-top: 1px dashed #a9a9a9;
  border-bottom: 1px dashed #a9a9a9;
  padding: 22px
}
</style>
