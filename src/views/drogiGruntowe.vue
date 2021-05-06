<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        height="95%"
        color="#0A0A0A"
    >
      <div style="padding-top: 8%" class="text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Utrzymanie dróg i placów</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
          Bierzące utrzymanie drug grunotwych. Posiadamy szeroki wachlarz sprzętu który pomaga nam w profesjonalny sposób wykonywać drogi parkingi oraz prowadzić remonty.

        </v-card-text>
      </div>

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
