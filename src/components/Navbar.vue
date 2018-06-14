<template>
  <div>
    <div>
    <v-toolbar flat color="grey darken-4" dense dark>
    <div>
      <span class="hidden-sm-and-down mr-3"><v-icon class="pr-1">mdi-phone</v-icon>(+511) 7059675 - 2237880</span>
      <span class="hidden-xs-only mr-2"><v-icon class="pr-1">mdi-email</v-icon>info@thradex.com</span>
      <span class="flag-icon flag-icon-pe mr-1"></span>
      <span class="flag-icon flag-icon-br mr-1"></span>
      <span class="flag-icon flag-icon-us"></span>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-google-plus</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-skype</v-icon>
    </v-btn>
  </v-toolbar>
  <v-toolbar :dark="settings.dark" :color="settings.color">
    <v-btn to="/" v-if="this.$route.path!=='/'" icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title class="home-logo mr-5"><img  @click="goHome" width="200px;" class="pt-2 ml-2" :src="require(`@/assets/${settings.logo}.png`)" alt=""></v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat slot="activator">About</v-btn>
        <v-list class="pt-0">
          <v-list-tile to="/historia">
            Nuestra historia
          </v-list-tile>
          <v-list-tile to="/lo-que-hacemos">
            Lo que hacemos
          </v-list-tile>
          <!-- <v-list-tile to="/donde">
            Dónde trabajamos
          </v-list-tile> -->
          <v-list-tile to="/nuestros-clientes">
            Nuestros clientes
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <v-btn flat slot="activator">Services</v-btn>
        <v-list>
          <v-list-tile @click="goPage(unidad.route)" avatar v-for="(unidad,i) in unidades" :key="i">
            <v-list-tile-avatar :tile="true">
              <img width="5px" :src="require(`@/assets/${unidad.logo}.png`)">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{unidad.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-btn flat>Projects</v-btn> -->
      <v-btn flat href="#footer">Contact us</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
  </v-toolbar>
  </div>
  <v-navigation-drawer fixed right temporary v-model="drawer">
      <template v-for="(item, i) in items">
        <v-layout v-if="item.heading" :key="i" row align-center>
          <v-flex xs6>
            <v-subheader>{{item.heading}}</v-subheader>
          </v-flex>
        </v-layout>
        <v-divider v-else-if="item.divider" :key="i" dark></v-divider>
        <v-list-tile :to="item.route" v-else :key="i">
          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
  </v-navigation-drawer>
</div>
</template>
<script>
import "flag-icon-css/css/flag-icon.css";
export default {
  props: {
    settings: {
      type: Object,
      required: false,
      default: {
        color: "white",
        logo: "logo-verde",
        dark: false
      }
    }
  },
  data: () => ({
    drawer: false,
    items: [
      { heading: "About" },
      { name: "Nuestra historia", route: "/historia" },
      { name: "Lo que hacemos", route: "/lo-que-hacemos" },
      // { name: "Donde trabajamos", route: "/donde" },
      { name: "Nuestros clientes", route: "/nuestros-clientes" },
      { divider: true },
      { heading: "Business Units" },
      { name: "Telecom", route: "/telecom" },
      { name: "Comercio", route: "/comercio" },
      { name: "Construccion", route: "/construccion" },
      { divider: true },
      // { name: "Projects", route: "/projects" },
      { name: "Contact us", route: "/contact" }
    ],
    unidades: [
      { name: "Telecom", logo: "celeste", route: "/telecom" },
      { name: "Comercio", logo: "naranja", route: "/comercio" },
      { name: "Construccion", logo: "blue", route: "/construccion" }
    ]
  }),
  computed: {
    scroll() {
      return window.scrollY;
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    goPage(url) {
      if (url[0] != "/") {
        location.href = url;
      } else {
        this.$router.push({ path: url });
      }
    }
  }
};
</script>
<style>
.home-logo:hover {
  cursor: pointer;
}
</style>
