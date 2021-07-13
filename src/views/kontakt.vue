<template>
<v-conteiner>
  <Nav></Nav>
  <v-card color="orange lighten-1">
  <v-row>
    <v-col xs="6" sm="6"  md="6"  lg="6" xl="6">
      <v-card
        height="900"
        width="100%"
        color="#0A0A0A"
        class="text-center d-flex align-content-center flex-wrap"
      >
        <v-card-text class="d-flex justify-center text-h2 orange--text text--lighten-1">Kontakt</v-card-text>
        <v-card-text class="headline white--text">
              <v-icon
                x-large
                :color=orange
              >
                mdi-phone-in-talk
              </v-icon>
              <a type="tel"  class=" text-decoration-none white--text">   +48 123 123 123</a>
            </v-card-text>
            <v-card-text class="headline white--text">
              <v-icon
                  large
                  :color=orange
              >
                mdi-email
              </v-icon>
              <a type="mail"  class="text-decoration-none white--text"> dariusz@darbud.pl </a>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col xs="6" sm="6"  md="6"  lg="6" xl="6" >
    <v-card
        min-width="300"
        height="900"
        width="100%"
    >
      <GmapMap
          :center="{lat:52.028604, lng: 20.677303}"
          :zoom="17"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
      >
      </GmapMap>
    </v-card>
    </v-col>
  </v-row>
  </v-card>
  <Footer></Footer>
</v-conteiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "kontakt",
  data() {
    return {
          orange: "orange lighten-1",
          map: ""
        }
      },
      components: {
        Nav,
        Footer
      },
    }
</script>

<style scoped>

</style>
