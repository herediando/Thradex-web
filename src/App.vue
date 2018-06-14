<template>
  <v-app>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  data: () => ({
    drawer: false,
    items: [
      { name: "Nosotros" },
      { name: "Servicios" },
      { name: "Proyectos" },
      { name: "Contactenos" }
    ]
  }),
  components: { Footer }
};
</script>
