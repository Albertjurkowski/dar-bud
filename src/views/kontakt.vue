<template>
<v-conteiner>
  <Nav></Nav>

  <v-row>
    <v-card
        height="900"
        color="white"
        width="50%"
    >
      <GmapMap
          :center="{lat:52.028604, lng: 20.677303}"
          :zoom="17"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
      >

      </GmapMap>
    </v-card>
  <v-card
      height="900"
      color="#0A0A0A"
      width="50%"
  >
    <v-card
        class="mx-auto text-center text-h1-xl justify-center"
        color="#0A0A0A"
        height="800"
        width="1750"
        v-ripple

    >
      <div style="padding-top: 28%">
        <h1 style="font-size: 60px">
          <strong class=" orange--text text--lighten-1">Kontakt</strong>
        </h1>
        <v-card-text class="headline white--text">
          <v-icon

              x-large
              color="orange lighten-1"
          >
            mdi-phone-in-talk
          </v-icon>
          <a type="tel"  class=" text-decoration-none white--text">   +48 123 123 123</a>
        </v-card-text>
        <v-card-text class="headline white--text">
          <v-icon
              large
              color="orange lighten-1"
          >
            mdi-email
          </v-icon>
          <a type="mail"  class=" text-decoration-none white--text"> dariusz@darbud.pl </a>
        </v-card-text>

      </div>

    </v-card>
  </v-card>


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
    map:""
    }
  },
  components:{
    Nav,
    Footer
  },
}
</script>

<style scoped>

</style>
