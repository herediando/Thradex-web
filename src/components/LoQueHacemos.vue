<template>
<div>
  <AboutNavbar/>
  <div class="section">
      <v-layout row wrap class="text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="green-header">Lo </span>que <span class="green-header">hacemos</span></h1>
        <p>Brindamos servicios para clientes en todo el mundo, aportando nuestra experiencia y visión local del mercado con el objetivo de concretar exitosamente nuestros proyectos,  superando así, las expectativas de nuestros clientes.
          <br/><br/> Actualmente, nuestros partners de negocios aseguran una capacidad de operación en todo el Perú y en los países de Latinoamérica y el Caribe.</p>
        <carousel :autoplay="true" class="clientes-carousel" perPage="5">
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
import AboutNavbar from "@/components/AboutNavbar";
export default {
  data: () => ({}),
  components: {
    AboutNavbar
  }
};
</script>
<style scoped>
h1 {
  margin-top: 20px;
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
