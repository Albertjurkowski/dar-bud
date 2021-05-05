<template>
  <v-card>
    <v-toolbar extended color="#1E1E1EFF">
      <router-link @click.native="scrollToTop" :to="{name:'Home'}">
      <v-flex class="pt-14">
        <v-img  src="../assets/LOGO DAR BUD bez tla.png" alt="dar-bud" height="150" width="355.28340081" class="pt-1"/>
      </v-flex>
      </router-link>
        <v-spacer></v-spacer>
      <v-row
        align="center"
        justify="space-around"
        class="pt-10"
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
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    name: 'nav',

    data() {
      return {
        show: false,
        orange: "orange lighten-1",

      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0);
      }
    }
  }
</script>
