<template>
<div>
  <Navbar/>
  <v-toolbar dense color="lime accent-4">
    <v-toolbar-items>
      <v-btn v-for="(item,i) in items" :key="i"  flat :to="item.route"><span class=" hidden-xs-only mr-1">{{item.prefijo+' '}}</span>{{item.name}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  data: () => ({
    items: [
      { prefijo: "nuestra ", name: "historia", route: "/historia" },
      { prefijo: "lo ", name: "que hacemos", route: "/lo-que-hacemos" },
      { prefijo: "", name: "principios", route: "/principios" },
      { prefijo: "", name: "certificaciones", route: "/certificaciones" },
      // { name: "donde trabajamos", route: "/donde" },
      { prefijo: "nuestros ", name: "clientes", route: "/nuestros-clientes" }
    ]
  }),
  components: {
    Navbar
  }
};
</script>
