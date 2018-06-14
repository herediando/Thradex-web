<template>
<div>
  <AboutNavbar/>
  <div class="section">
    <v-layout row wrap class="text-xs-center">
    <v-flex xs10 offset-xs1>
      <h1><span class="green-header">Nuestra </span>Historia</h1>
    </v-flex>
  </v-layout>
    <img width="100%" src="../assets/historia.png" alt="">
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
<style>
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
