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
          Posiadamy szeroki wachlarz sprzętu który pomaga nam w profesjonalny sposób wykonywać drogi parkingi oraz prowadzić remonty
        </v-card-text>
      </div>

      <v-row align="center" class="mx-auto justify-center pt-16">
        <v-card height="562.5" width="750" color="theme--dark">
          <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
            <strong> Technologia</strong>
          </h1>

          <v-card-text class="headline pt-10 white--text" >
           nasze drogi, parkingi, ścieżki oraz chodniki są wykonywane przy użyciu najnowszych technologi przez wyselekcjonowany sprzęt. Nasi doświadczeni pracownicy są szkoleni przez najlepszych specjalistów.
          </v-card-text>
          <v-card-actions style="margin-top: 25%" class="mr-11">
            <v-spacer></v-spacer>
            <router-link to="sprzet" class="text-decoration-none">
              <v-btn
                  :color=orange
                  outlined

              >
                Zobacz więcej
              </v-btn>
            </router-link>
          </v-card-actions>
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
              src: require("../assets/drogi/a.jpg"),
            },
            {
              src: require("../assets/drogi/c.jpg"),
            },
            {
              src: require("../assets/drogi/d.jpg"),
            }
          ]
        };
      }
    }
</script>

<style scoped>

</style>
