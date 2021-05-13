<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
      color="#0A0A0A"
      class="pt-15 text-center"
    >
        <h1 class=" py-7 orange--text text--lighten-1">
          <strong>Utrzymanie dróg i placów</strong>
        </h1>
        <v-card-text class="text-md-body-1 white--text" >
          Bierzące utrzymanie drug grunotwych. Posiadamy szeroki wachlarz sprzętu który pomaga nam w profesjonalny sposób wykonywać drogi parkingi oraz prowadzić remonty.
        </v-card-text>
      <v-row align="center" class="mx-auto justify-center">
        <v-card width="750" class="py-15" color="#0A0A0A">
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
  name: "drogiGruntowe",
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
              src: require("../assets/drogi/b.jpg"),
            },
            {
              src: require("../assets/drogi/20200523_114018.jpg"),
            },
            {
              src: require("../assets/drogi/c.jpg"),
            },
            {
              src: require("../assets/drogi/20200629_144834.jpg"),
            },
            {
              src: require("../assets/drogi/IMG_20180818_114431.jpg"),
            },
            {
              src: require("../assets/drogi/VID_20200820_125156_exported_22613_1597948953933.jpg"),
            }
          ]
        };
      }
    }
</script>

<style scoped>

</style>
