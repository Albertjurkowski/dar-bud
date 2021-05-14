<template>
<v-conteiner>
  <Nav></Nav>
  <v-row>
    <v-col xs="12" sm="12"  md="6"  lg="6" xl="6" >
      <v-card
          height="100%"
          color="#0A0A0A"
          class="text-center justify-center"
          width="100%"
      >

          <div style="padding-top: 28%">
            <h1 style="font-size: 60px">
              <strong class=" orange--text text--lighten-1">Kontakt</strong>
            </h1>
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
          </div>
        </v-card>
    </v-col>
    <v-col xs="12" sm="12"  md="6"  lg="6" xl="6">
    <v-card
        height="900"
        color="white"
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
