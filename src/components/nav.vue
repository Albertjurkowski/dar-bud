<template>
  <v-cointeiner>

      <v-app-bar fixed color="#1E1E1EFF">
        <v-cointeiner class="hidden-sm-and-down">
          <v-row>
        <router-link @click.native="scrollToTop" :to="{name:'Home'}">
        <v-flex class="pt-7" >
          <v-img  src="../assets/LOGOBezTla.png" alt="dar-bud" height="150" width="355.28340081" class="pt-1"/>
        </v-flex>
        </router-link>
            <v-spacer></v-spacer>
        <v-row
          align="center"
          justify="space-around"

        >
          <div class="justify-end">
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
          </div>
          </v-row>
        </v-row>

        </v-cointeiner>
        <div class="hidden-md-and-up">
          <v-app-bar-nav-icon color="white"  @click="drawer = true">  </v-app-bar-nav-icon>
        </div>
      </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="#1E1E1EFF"
        style="top:0; left:0; position:fixed;"

    >
      <v-list
          nav
          height="100vh"
          dense

      >
        <v-list-item-group
            v-model="group"
            active-class="deep-orange--text text--lighten-1"
            class="text--white white--text"
        >
          <v-list-item>
            <v-btn
                href="/#referencje"
                text
                color="grey lighten-3"
            >
            <v-list-item-title class="text--white white--text">referencje</v-list-item-title>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
                href="/#nas"
                text
            >
          <v-list-item-title class="text--white white--text">o nas</v-list-item-title>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
                href="/#inwestycje"
                text
            >
            <v-list-item-title class="text--white white--text">inwestycje</v-list-item-title>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
                text
                href="/#usluga"
            >
            <v-list-item-title class="text--white white--text">usługi</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
                text
                color="grey lighten-3"
            >
            <v-list-item-icon>
            <v-icon
                right
                dark
            >
              mdi-phone-in-talk
            </v-icon>
            </v-list-item-icon>
            <router-link :to="{name:'kontakt'}" @click.native="scrollToTop"  class="text-decoration-none text--white white--text">
            <v-list-item-title>kontakt</v-list-item-title>
            </router-link>
            </v-btn>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
