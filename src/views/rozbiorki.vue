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
        <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"></v-card>
      </v-row>
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
      orange: "orange lighten-1",
      items: [

        {
          src: require("../assets/rozbiurki/20191021_122006.jpg"),
        },
        {
          src: require("../assets/rozbiurki/20191021_132511.jpg"),
        },
        {
          src: require("../assets/rozbiurki/20191021_151950.jpg"),
        },
        {
          src: require("../assets/rozbiurki/20191021_161102.jpg"),
        },
      ],
      karczowanie:[
        {
          src:require("../assets/karczowanie/IMG_20201208_125802.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20180625_092049.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20180626_111740.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20180626_111813.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20201203_080338.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20201203_083745.jpg")
        },
        {
          src:require("../assets/karczowanie/IMG_20201208_125746.jpg")
        },

        {
          src:require("../assets/karczowanie/IMG_20201216_145305.jpg")
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
