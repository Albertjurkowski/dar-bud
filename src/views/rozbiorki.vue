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
        <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"> </v-card>
      </v-row>

      <v-row align="center" class="mx-auto justify-center pt-16">
        <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"></v-card>
        <v-card height="562.5" width="750" color="theme--dark">
          <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
            <strong> Wycinka drzew, karczowanie, wyrywanie i wywóz karp</strong>
          </h1>

          <v-card-text class="headline pt-10 white--text" >
            NNiwelacja, podnoszenie i kształtowanie terenu, skarpowanie
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

      <v-row align="center" class="mx-auto justify-center pt-16">
        <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"></v-card>
        <v-card height="562.5" width="750" color="theme--dark">
          <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
            <strong> Gaz, woda, kanalizacja</strong>
          </h1>

          <v-card-text class="headline pt-10 white--text" >
            Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
          </v-card-text>
        </v-card>
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
  }
};
</script>

<style scoped>

</style>
