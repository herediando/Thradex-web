<template>
<div>
  <AboutNavbar/>
  <div class="section">
      <v-layout row wrap class="text-xs-center">
      <v-flex xs10 offset-xs1>
        <h1><span class="green-header">Principios</span></h1>
        <p>Enfoque en el bienestar de nuestros clientes. Agrega valor a la toma de decisiones de nuestros 
          clientes y contribuir con el crecimiento de su organización a través de círculos sostenibles, 
          soluciones integradas, relevantes, oportunas y confiables.
         <p> Respeto a los demás y el profesionalismo en el trabajo
          
          <p>Motivar a nuestros colaboradores y partners de negocios a verter su experiencia 
          y conocimientos en busca de resultados que superen las expectativas del equipo
          <p>Promover el trabajo en equipo para acelerar los resultados de un proyecto y optimizar los 
          procesos para desarrollar un trabajo óptimo para beneficio de nuestros clientes
         <p> Reconocer y premiar el desempeño sobresaliente de los colaboradores y equipos de trabajo con el 
          compromiso de alentar siempre iniciativas que contribuyan a su desarrollo personal y profesional además de mejorar el clima laboral.

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
