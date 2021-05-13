<template>
  <v-cointeiner>
    <v-card class="hidden-sm-and-down" >
      <v-app-bar position: fixed color="#1E1E1EFF"  >
        <router-link @click.native="scrollToTop" :to="{name:'Home'}">
        <v-flex class="pt-7">
          <v-img  src="../assets/LOGOBezTla.png" alt="dar-bud" height="150" width="355.28340081" class="pt-1"/>
        </v-flex>
        </router-link>
          <v-spacer></v-spacer>
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn
            text
            color="grey lighten-3"
          >
            referencje
          </v-btn>
          <v-btn
            href="/#nas"
            text
            color="grey lighten-3"
          >
            o nas
          </v-btn>
          <v-btn
            href="/#inwestycje"
            text
            color="grey lighten-3"
          >
            inwestycje
          </v-btn>
          <v-btn
            text
            color="grey lighten-3"
            href="/#usluga"
          >
            usługi
          </v-btn>

          <router-link :to="{name:'kontakt'}" class="text-decoration-none">
          <v-btn
              :color=orange
              class="ma-2 white--text"
              outlined
          >
            kontakt
            <v-icon
                right
                dark
            >
              mdi-phone-in-talk
            </v-icon>
          </v-btn>
          </router-link>
        </v-row>
      </v-app-bar>
    </v-card>
    <v-toolbar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
      <v-toolbar-title>Desktop Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
            v-for="item in nav"
            :key="item.icon"
            to="#"
            :title="item.title"
            flat
        >{{ item.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
      <v-toolbar-title>Mobile Menu</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
        <v-card>
          <v-toolbar flat color="blue-grey darken-2">
            <v-toolbar-title>Mobile Menu</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </v-cointeiner>
</template>

<script>
  export default {
    name: 'nav',

    data() {
      return {
        show: false,
        orange: "orange lighten-1",
        drawer: false,
        group: null,

      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0);
      }
    }
  }
</script>
<style scoped>

</style>
