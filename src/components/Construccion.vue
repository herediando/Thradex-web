11<template>
<div>
  <Navbar :settings="settings" />
  <img class="unidad-image" src="../assets/idea-construccion.png" alt="">
    <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
    <h1><span class="green-header">Nuestros </span>Servicios</h1>
      <p>Desde el 2011, la división de infraestructura y construcción ha experimentado un gran crecimiento, sobretodo en  el desarrollo de proyectos de obras civiles, saneamiento e infraestructura</p>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-around>
        <v-flex xs4 class="text-xs-center" v-for="(servicio, i) in servicios" :key="i">
            <img src="../assets/cubito-azul.png" alt="">
            <h2>{{servicio.titulo}}</h2>
        </v-flex>
      </v-layout>
    </v-container>
    </v-flex>
  </v-layout>
  </div>
</div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  data: () => ({
    settings: {
      color: "blue lighten",
      logo: "logo-azul",
      dark: false
    },
    servicios: [{titulo: "Infraestructura de Telecomunicaciones"}, {titulo: "Infraestructura Civil"}]
  }),
  components: {Navbar}
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
</style>
