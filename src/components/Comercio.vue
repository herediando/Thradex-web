<template>
<div>
  <Navbar :settings="settings" />
  <img width="100%" src="../assets/idea-comex.png" alt="">
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
    <div class="unit-wrapper">
      <h1><span class="black-header">Nuestros Servicios</span></h1>
      <p>
        Es la unidad de negocio de Thradex cuya actividad principal es la importación y exportación de
         materiales y equipos para proyectos de ingeniería de telecomunicaciones
      </p>
      <v-container grid-list-xl>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 class="text-xs-center" v-for="(servicio, i) in servicios" :key="i">
              <!-- <img src="../assets/cubito-naranja.png" alt=""> -->
              <v-icon class="ico">{{servicio.icono}}</v-icon>
              <h2>{{servicio.titulo}}</h2>
              <p>{{servicio.descripcion}}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
      color: "orange lighten-1",
      logo: "logo-naranja",
      dark: false
    },
    servicios: [
      {
        titulo: "Ingeniería & Diseño de Redes",
        icono: "mdi-network",
        descripcion:
          "Trabajamos para diseñar una red que se ajuste a sus necesidades, generando soluciones innovadoras para garantizar un óptimo rendimiento."
      },
      {
        titulo: "Implementación de Red - EFI & T",
        icono: "mdi-switch",
        descripcion:
          "Gestión de riesgos y calidad. Para garantizar un buen servicio a nuestros clientes, cubrimos todo el proceso de implementación, desde la compra de materiales primarios hasta configuraciones avanzadas, puesta en marcha y entrega final."
      },
      {
        titulo: "Servicios de operación & Mantenimiento de Red",
        icono: "mdi-dip-switch",
        descripcion:
          "Aportamos  el conocimiento y la experiencia. Mecanismos de supervisión. Soporte técnico contínuo."
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
  margin-bottom: 40px;
}
.black-header {
  color: #130b00;
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

.unidad-image {
  width: 100%;
}

.unit-wrapper {
  border-left:12px #ffa726 solid;
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
  background-color: rgb(255, 207, 118);
  font-size: 500%;
}
</style>
