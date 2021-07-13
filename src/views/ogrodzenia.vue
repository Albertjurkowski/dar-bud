<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        class="text-center text-h1-xl pt-16"
        color="#0A0A0A"
        dark
        height="100%"
    >
      <div class="pt-16 mx-auto justify-center">
        <v-card-text class="d-flex justify-center text-h2  orange--text text--lighten-1">Budowa ogrodzeń</v-card-text>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
          Niezależnie od zastosowanego materiału nasze ogrodzenia prezentują najwyższa jakość.
        </v-card-text>
      </div>
      <v-row align="center" class="mx-auto justify-center">
        <v-card width="750" class="pt-10" color="#0A0A0A">
          <v-carousel
              cycle
              hide-delimiters
              height="562.5"
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

    </v-card>
    <Footer></Footer>
  </v-cointeiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "ogrodzenia",
  components: {
    Footer,
    Nav
  },
  data() {
    return {
      show: false,


      orange: "orange lighten-1",
      items: [

        {
          src: require("../assets/ogrodzenia/1.jpg"),
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>
