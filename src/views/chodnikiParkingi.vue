<template>
  <v-cointeiner>
    <Nav></Nav>

    <v-card
        height="100%"
        color="#0A0A0A"
    >
      <div class="pt-16 text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Chodniki i Parkingi</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
          Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
        </v-card-text>
      </div>
      <div class="hidden-md-and-down">
    <v-row align="center" class="mx-auto justify-center pt-16">
      <v-card height="562.5" width="750" color="theme--dark" >
        <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
          <strong> Chodniki</strong>
        </h1>

        <v-card-text class="headline pt-10 white--text" >
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
        <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
          <strong> Parkingi</strong>
        </h1>

        <v-card-text class="headline pt-10 white--text" >
          Przygotowanie terenu pod budowę parkingu oraz budowa parkingu.
        </v-card-text>
      </v-card>

    </v-row>
      </div>
      <div
          v-for="(item, index) in items"
          :key="index"
          class="pt-10 hidden-lg-and-up"
      >
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
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="white--text">
            {{item.subtitle }}
          </v-card-subtitle>

        </v-card>
      </div>
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

      items:[
        {
          title: "Chodniki",
          subtitle: " Posiadamy 15 letnie doświadczenie w układaniu chodników z kostki brukowej, oraz",
        },
        {
          title: "Parkingi",
          subtitle: "Przygotowanie terenu pod budowę parkingu oraz budowa parkingu.",
        }
      ],
      chodniki: [

        {
          src: require("../assets/drogi/1.jpg"),
        },
        {
          src: require("../assets/drogi/2.jpg"),
        },
        {
          src: require("../assets/drogi/3.jpg"),
        },
      ],
      parkingi: [

        {
          src: require("../assets/drogi/1.jpg"),
        },
        {
          src: require("../assets/drogi/2.jpg"),
        },
        {
          src: require("../assets/drogi/3.jpg"),
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>
