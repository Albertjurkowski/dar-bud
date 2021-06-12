<template>
  <v-cointeiner>
    <Nav></Nav>

    <v-card
        height="100%"
        color="#0A0A0A"
        class="pt-10"
    >
      <div class="pt-16 mx-auto justify-center">
          <v-card-title class="d-flex justify-center text-h2  orange--text text--lighten-1">Chodniki i Parkingi</v-card-title>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
          Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
        </v-card-text>
      </div>
      <div class="hidden-md-and-down">
    <v-row align="center" class="mx-auto justify-center pt-16">
      <v-card height="562.5" width="750" color="theme--dark" >
        <v-card-title class="d-flex justify-center text-h2 orange--text text--lighten-1">Chodniki</v-card-title>
        <v-card-text class="text-center justify-center text-h6 pt-10 white--text" >
          Posiadamy 15 letnie doświadczenie w układaniu chodników z kostki brukowej, oraz
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
              v-for="(item,i) in chodniki"
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
              v-for="(item,i) in parkingi"
              :key="i"
              :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-card>
      <v-card height="562.5" width="750" color="theme--dark">
        <v-card-title class="d-flex justify-center text-h2 orange--text text--lighten-1">Parkingi</v-card-title>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" > Przygotowanie terenu pod budowę parkingu oraz budowa parkingu.
        </v-card-text>
      </v-card>

    </v-row>
      </div>

        <v-card
            class="mx-auto hidden-lg-and-up"
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
                v-for="(item,i) in chodniki"
                :key="i"
                :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>

          <v-card-title class="orange--text text--lighten-1">
            Chodniki
          </v-card-title>

          <v-card-subtitle class="white--text">
            Posiadamy 15 letnie doświadczenie w układaniu chodników z kostki brukowej, oraz
          </v-card-subtitle>

        </v-card>

      <div class="pt-10"></div>
            <v-card
            class="mx-auto hidden-lg-and-up"
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
                v-for="(item,i) in parkingi"
                :key="i"
                :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>

          <v-card-title class="orange--text text--lighten-1">
            Parkingi
          </v-card-title>

          <v-card-subtitle class="white--text">
            Przygotowanie terenu pod budowę parkingu oraz budowa parkingu.
          </v-card-subtitle>

        </v-card>

    </v-card>



    <Footer></Footer>
  </v-cointeiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "chodnikiParkingi",
  components: {
    Footer,
    Nav
  },
  data() {
    return {
      show: false,
      orange: "orange lighten-1",

      chodniki: [


      {
        src: require("../assets/inwestycje/12.jpg"),
      },
      {
        src: require("../assets/inwestycje/7.jpg"),
      },
      {
        src: require("../assets/inwestycje/9.jpg"),
      },
      {
        src: require("../assets/inwestycje/11.jpg"),
      },
      {
        src: require("../assets/inwestycje/14.jpg"),
      },
      {
        src: require("../assets/inwestycje/5.jpg"),
      },
      {
        src: require("../assets/inwestycje/6.jpg"),
      },  {
        src: require("../assets/inwestycje/15.jpg"),
      },
       ],
      parkingi: [
        {
          src:require("../assets/karczowanie/8.jpg")
        },
        {
          src: require("../assets/inwestycje/2.jpg"),
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>
