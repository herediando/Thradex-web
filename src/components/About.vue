<template>
<div>
<Navbar/>
   <v-tabs
      v-model="active"
      color="lime accent-4"
      slider-color="black"
    >
      <v-tab
        v-for="(item,i) in items"
        :key="i"
      >
        {{item.name}}
      </v-tab>
      <v-tab-item
        v-for="(item,i) in items"
        :key="i"
      >
          <component :is="item.component"></component>
      </v-tab-item>
    </v-tabs>
    <NuestrosClientes/>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Historia from "@/components/Historia";
import Donde from "@/components/Donde";
import NuestrosClientes from "@/components/NuestrosClientes";
import LoQueHacemos from "@/components/LoQueHacemos";
export default {
  data: () => ({
    active: "1",
    items: [
      { name: "nuestra historia", component: `Historia` },
      { name: "lo que hacemos", component: `LoQueHacemos` },
      { name: "donde trabajamos", component: `Donde` },
      { name: "nuestros clientes", component: `NuestrosClientes` }
    ]
  }),
  methods: {
    getActiveItem(id) {
      switch (id) {
        case "historia":
          return "0";
        case "lo-que-hacemos":
          return "1";
        case "donde":
          return "2";
        case "nuestros-clientes":
          return "3";
      }
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.active = this.getActiveItem(id);
  },
  components: {
    Navbar,
    Historia,
    Donde,
    NuestrosClientes,
    LoQueHacemos
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
