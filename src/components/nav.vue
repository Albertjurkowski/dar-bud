<template>
  <v-cointeiner>
    <div class="hidden-md-and-down">
        <v-app-bar fixed color="#1E1E1E" lights-out>
          <v-row>
           <router-link @click.native="scrollToTop" :to="{name:'Home'}">
            <v-flex class="pt-7 ml-16" >
              <v-img  src="../assets/Logobt.png" alt="dar-bud" height="150" width="355.28340081" class="pt-1"/>
            </v-flex>
           </router-link>
            <v-spacer></v-spacer>
        <v-row
          align="center"
          justify="end"
          class="text-left mr-16"
        >
          <div class="justify-end text-left">
          <router-link  @click.native="scrollToTop" :to="{name:'referencje'}" class="text-decoration-none">
            <v-btn
              text
              color="grey lighten-3"
            >
              referencje
            </v-btn>
          </router-link>
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
            href="/#uslugi"
          >
            usługi
          </v-btn>
          <router-link @click.native="scrollToTop"  :to="{name:'kontakt'}" class="text-decoration-none">
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
          </v-app-bar>
        </div>
    <div class="hidden-lg-and-up">
      <v-app-bar fixed color="#1E1E1E" lights-out width="100%">
        <v-app-bar-nav-icon color="white" @click="drawer = true"></v-app-bar-nav-icon>
        <div class="mx-auto">
        <router-link @click.native="scrollToTop" :to="{name:'Home'}">
          <v-flex class="pt-5">
            <v-img src="../assets/Logobt.png" alt="dar-bud" height="108" width="255.8" />
          </v-flex>
        </router-link>
        </div>
      </v-app-bar>
      <v-navigation-drawer
        opacity="0.2"
        v-model="drawer"
        temporary
        color="#1E1E1EFF"
        style="position:fixed;"
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--lighten-1"
          class="text--white white--text"
        >
          <router-link :to="{name:'referencje'}" @click.native="scrollToTop" class="text-decoration-none">
          <v-list-item    width="100%">
            <v-btn
              text
              color="grey lighten-3"
            >
            <v-list-item-title class="text--white white--text">referencje</v-list-item-title>
            </v-btn>

          </v-list-item>
          </router-link>
          <v-btn
            width="100%"
            text
            href="/#nas"
          >
          <v-list-item>
          <v-list-item-title class="text--white white--text">o nas</v-list-item-title>

          </v-list-item>
          </v-btn>
          <v-btn
            href="/#inwestycje"
            text
            width="100%"
          >
          <v-list-item>
            <v-list-item-title class="text--white white--text">inwestycje</v-list-item-title>
          </v-list-item>
          </v-btn>

          <v-btn
              text
              href="/#uslugi"
              width="100%"

          >
          <v-list-item>
            <v-list-item-title class="text--white white--text">usługi</v-list-item-title>
          </v-list-item>
          </v-btn>

          <router-link :to="{name:'kontakt'}" @click.native="scrollToTop"  class="text-decoration-none text--white white--text">
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
            <v-list-item-title>kontakt</v-list-item-title>
            </v-btn>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
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
        console.log(this.$router)
      }
    }
  }
</script>
<style scoped>

</style>
