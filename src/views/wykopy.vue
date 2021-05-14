<template>
  <v-cointeiner>
    <Nav></Nav>
      <v-card
        height="95%"
        color="#0A0A0A"
      >
        <div style="padding-top: 8%" class="text-center">
          <h1 style="font-size: 70px" class="orange--text text--lighten-1">
            <strong>Wykopy</strong>
          </h1>
          <v-card-text class="headline pt-10 white--text" >
           Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
          </v-card-text>
        </div>

        <v-row align="center" class="mx-auto justify-center pt-16">
        <v-card height="562.5" width="750" color="theme--dark">
          <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
            <strong> Szerokoprzestrzenne</strong>
          </h1>

          <v-card-text class="headline pt-10 white--text" >
            Polecane są na przykład wówczas, gdy działka znajduje się na gruntach niezbyt spoistych, bądź wtedy, gdy dom ma być w całości lub częściowo podpiwniczony. Skarpy takiego dużego wykopu powinny być nachylone pod kątem 35-40°. Dno wykopu powinno się znaleźć poniżej poziomu przemarzania gruntu. W zależności od tego, w której strefie przemarzania gruntu znajduje się dana działka, poziom ten wynosi od 0,8 do 1,4 m. Deskowanie ław będziemy robić na wyrównanym dnie wykopu szerokoprzestrzennego.
          </v-card-text>
        </v-card>
          <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"> </v-card>
        </v-row>

        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750"><img src="../assets/lawyfundamentalne.jpg" alt="ławy fundamentalne" width="100%" height="100%"></v-card>
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> Ławy fundamentowe</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              Podstawą solidnego, dobrze wykonanego domu są fundamenty. Wykonać je można za pomocą ław fundamentowych. Te zapewnią dużą wytrzymałość całej konstrukcji domu oraz są w stanie przenieść ciężar budynku ze ścian fundamentowych na grunt.
            </v-card-text>
          </v-card>
        </v-row>

        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> Szamba</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              Podziemny zbiornik, zazwyczaj bezodpływowy, wykonany np. z betonu, do którego odprowadzane są ścieki z domowych urządzeń kanalizacyjnych.
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750"><img src="../assets/rozbiurka.jpg" alt="rozbiurka" width="100%" height="100%"></v-card>
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

              >

                <v-img
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    :setsrc="item.mobile" x3
                ></v-img>

              </v-carousel-item>
            </v-carousel>
          </v-card>
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
  name: "wykopy",
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
          src: "../assets/kanalizacje/20200330_143735.jpg",
          mobile: "../assets/inwestycjeMobile/IMG_0055-min.jpg",
        },
        {
          src: require("../assets/kanalizacje/20200330_143808.jpg"),
          mobile: require("../assets/inwestycjeMobile/IMG_0055-min.jpg"),
        },
        {
          src: require("../assets/kanalizacje/20191221_180347.jpg"),
          mobile: require("../assets/inwestycjeMobile/IMG_0055-min.jpg"),
        },
        {
          src: require("../assets/kanalizacje/20191231_152029.jpg"),
          mobile: require("../assets/inwestycjeMobile/IMG_0055-min.jpg"),
        },
        {
          src: require("../assets/kanalizacje/20200327_164436.jpg"),
          mobile: require("../assets/inwestycjeMobile/IMG_0055-min.jpg"),
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
