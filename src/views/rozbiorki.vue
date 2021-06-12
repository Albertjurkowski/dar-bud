<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        height="95%"
        color="#0A0A0A"
    >
      <div style="padding-top: 8%" class="text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Rozbiórki</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
          Nasze rozbiórki są przeprowadzane rzetelnie w kontrolowany sposób
        </v-card-text>
      </div>

      <div class="hidden-md-and-down">
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> Wyburzenia budynków gospodarczych, mieszkalnych i
                Przemysłowych</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              PRZYGOTOWANIE TERENU POD BUDOWĘ
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750">
            <v-carousel
                cycle
                hide-delimiters
                height="100%"
                max-widith="100%"
                hide-delimiter-background
                show-arrows-on-hover
            >
              <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-row>

        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750">
            <v-carousel
                cycle
                hide-delimiters
                height="100%"
                max-widith="100%"
                hide-delimiter-background
                show-arrows-on-hover
            >
              <v-carousel-item
                  v-for="(item,i) in karczowanie"
                  :key="i"
                  :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> Wycinka drzew, karczowanie, wyrywanie i wywóz karp</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              Niwelacja, podnoszenie i kształtowanie terenu, skarpowanie
            </v-card-text>
          </v-card>
        </v-row>

        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> Osuszanie terenu</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750"><img src="../assets/kanalizacje/4.jpg" alt="rozbiurka" width="100%" height="100%"></v-card>
        </v-row>
      </div>
      <div class="pt-10"></div>
      <v-card
          class=" mx-auto hidden-lg-and-up"
          max-width="344"
          color="theme--dark"
      >
        <v-carousel
            cycle
            hide-delimiters
            height="100%"
            max-widith="100%"
            hide-delimiter-background
            show-arrows-on-hover
        >
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>

        <v-card-title class="orange--text text--lighten-1">
          Wyburzenia budynków gospodarczych, mieszkalnych i Przemysłowych
        </v-card-title>

        <v-card-subtitle class="white--text">

        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              icon
              color="white"
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>

            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <div class="pt-10"></div>
      <v-card
          class=" mx-auto hidden-lg-and-up"
          max-width="344"
          color="theme--dark"
      >
      <v-img src="../assets/kanalizacje/4.jpg">
      </v-img>

        <v-card-title class="orange--text text--lighten-1">
          Osuszanie terenu
        </v-card-title>

        <v-card-subtitle class="white--text">

        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              icon
              color="white"
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>

            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <div class="pt-10"></div>
      <v-card
          class=" mx-auto hidden-lg-and-up"
          max-width="344"
          color="theme--dark"
      >
        <v-carousel
            cycle
            hide-delimiters
            height="100%"
            max-widith="100%"
            hide-delimiter-background
            show-arrows-on-hover
        >
          <v-carousel-item
              v-for="(item,i) in karczowanie"
              :key="i"
              :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>

        <v-card-title class="orange--text text--lighten-1">
          Wycinka drzew, karczowanie, wyrywanie i wywóz karp
        </v-card-title>

        <v-card-subtitle class="white--text">

        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              icon
              color="white"
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>

            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-card>
    <Footer></Footer>
  </v-cointeiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "rozbiorka",
  components: {
    Footer,
    Nav
  },
  data() {
    return {
      show: false,
      orange: "orange lighten-1",
      wykopy: [
        {
        title:"",
        subtitle:"",
        description:"",
        src: require("../assets/rozbiurki/1.jpg"),
        },
        {
          title:"",
        subtitle:"",
        description:"",
          src: require("../assets/rozbiurki/2.jpg"),

        }
      ],
      items: [

        {
          src: require("../assets/rozbiurki/1.jpg"),
        },
        {
          src: require("../assets/rozbiurki/2.jpg"),
        },
        {
          src: require("../assets/rozbiurki/3.jpg"),
        },
        {
          src: require("../assets/rozbiurki/4.jpg"),
        },
      ],
      karczowanie:[
        {
          src:require("../assets/karczowanie/1.jpg")
        },
        {
          src:require("../assets/karczowanie/2.jpg")
        },
        {
          src:require("../assets/karczowanie/3.jpg")
        },
        {
          src:require("../assets/karczowanie/4.jpg")
        },
        {
          src:require("../assets/karczowanie/5.jpg")
        },
        {
          src:require("../assets/karczowanie/6.jpg")
        },
        {
          src:require("../assets/karczowanie/7.jpg")
        },
        {
          src:require("../assets/karczowanie/8.jpg")
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
