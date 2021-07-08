<template>
  <v-cointeiner>
    <Nav></Nav>

    <v-card

        color="#0A0A0A"
        class="py-10"
    >
      <div class="pt-16 mx-auto justify-center">
        <v-card-title class="d-flex justify-center text-h2  orange--text text--lighten-1">Wynajem samochodów luksusowych</v-card-title>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
          Oferujemy wynajem samochodów luksusowych
        </v-card-text>
      </div>
      <div class="hidden-md-and-down">
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="500" width="750" color="theme--dark" >
            <v-card-title class="d-flex justify-center text-h2 orange--text text--lighten-1">lexus<v-card-title class="pt-10"> lc 500</v-card-title></v-card-title>
            <v-card-text class="text-center justify-center text-h6 pt-10 white--text" >
              <ul>
              <li>Aktywne zawieszenie o zmiennej charakterystyce (AVS)</li>
              <li>System monitorowania martwego pola (BSM) </li>
              <li>System ochrony przedzderzeniowej (PCS)</li>
              <li>System audio klasy premium Mark Levinson®</li>
              <li>Szklany dach z manualną przysłoną </li>
              </ul>
            </v-card-text>
          </v-card>
          <v-card height="500" width="750">
         <v-img src="../assets/lexus.jpg" alt="lexus lc 500"></v-img>
          </v-card>
        </v-row>
      </div>

      <v-card
        class="mx-auto hidden-lg-and-up"
        max-width="344"
        color="theme--dark"
      >
        <v-img src="../assets/lexus.jpg" alt="lexus lc 500"></v-img>
        <v-card-title class="text-h4 orange--text text--lighten-1">
          Lexus<v-card-title class="white--text text-subtitle-2 pt-7">lc 500</v-card-title>
        </v-card-title>


        <v-card-subtitle class="white--text">
          Oferujemy wynajem samochodów luksusowych
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
        },
        {
          src: require("../assets/inwestycje/15.jpg"),
        },
      ],
    };
  }
}
</script>

<style scoped>

</style>
