<template>
  <v-cointeiner>
    <Nav></Nav>
      <v-card
        max-height="100%"
        color="#0A0A0A"
      >
        <div class="pt-16 text-center">
          <v-card-text class="d-flex justify-center text-h2  orange--text text--lighten-1">Wykopy</v-card-text>
          <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
            Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
          </v-card-text>
        </div>
        <div class="hidden-md-and-down">
          <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style=" font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> </strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
            </v-card-text>

            <v-card-text class="d-flex justify-center text-h3  orange--text text--lighten-1">Szerokoprzestrzenne</v-card-text>
            <v-card-text class="text-h6 pt-10 white--text" >
              Polecane są na przykład wówczas, gdy działka znajduje się na gruntach niezbyt spoistych, bądź wtedy, gdy dom ma być w całości lub częściowo podpiwniczony. Skarpy takiego dużego wykopu powinny być nachylone pod kątem 35-40°. Dno wykopu powinno się znaleźć poniżej poziomu przemarzania gruntu. W zależności od tego, w której strefie przemarzania gruntu znajduje się dana działka, poziom ten wynosi od 0,8 do 1,4 m. Deskowanie ław będziemy robić na wyrównanym dnie wykopu szerokoprzestrzennego.
            </v-card-text>
          </v-card>
            <v-card height="562.5" width="750"><img src="../assets/rozbiurki/5.jpg" alt="rozbiurka" width="100%" height="100%"> </v-card>
          </v-row>

          <v-row align="center" class="mx-auto justify-center pt-16">
            <v-card height="562.5" width="750"><img src="../assets/fundamenty/3.jpg" alt="ławy fundamentalne" width="100%" height="100%"></v-card>
            <v-card height="562.5" width="750" color="theme--dark">
              <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
                <strong> </strong>
              </h1>

              <v-card-text class="headline pt-10 white--text" >
              </v-card-text>
              <v-card-text class="d-flex justify-center text-h3  orange--text text--lighten-1">Ławy fundamentowe</v-card-text>
              <v-card-text class="text-h6 pt-10 white--text" >
                Podstawą solidnego, dobrze wykonanego domu są fundamenty. Wykonać je można za pomocą ław fundamentowych. Te zapewnią dużą wytrzymałość całej konstrukcji domu oraz są w stanie przenieść ciężar budynku ze ścian fundamentowych na grunt.
              </v-card-text>
            </v-card>
          </v-row>

          <v-row align="center" class="mx-auto justify-center pt-16">
            <v-card height="562.5" width="750" color="theme--dark">
              <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
                <strong> </strong>
              </h1>

              <v-card-text class="headline pt-10 white--text" >
              </v-card-text>
              <v-card-text class="d-flex justify-center text-h3  orange--text text--lighten-1">Szamba</v-card-text>
              <v-card-text class="text-h6 pt-10 white--text" >
                Podziemny zbiornik, zazwyczaj bezodpływowy, wykonany np. z betonu, do którego odprowadzane są ścieki z domowych urządzeń kanalizacyjnych.
              </v-card-text>
            </v-card>
            <v-card height="562.5" width="750"><img src="../assets/rozbiurki/5.jpg"  alt="rozbiurka" width="100%" height="100%"></v-card>
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
                          v-for="(item,i) in kanalizacje"
                          :key="i"
                          :src="item.src"
                      >

                      </v-carousel-item>
                    </v-carousel>
                  </v-card>
                  <v-card height="562.5" width="750" color="theme--dark">
                    <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
                      <strong></strong>
                    </h1>

                    <v-card-text class="headline pt-10 white--text" >

                    </v-card-text>
                    <v-card-text class="d-flex justify-center text-h3  orange--text text--lighten-1"> Gaz, woda, kanalizacja</v-card-text>
                    <v-card-text class="text-h6 pt-10 white--text" >
                      Nasze wykopy są wykonywane dzięki sprzętu o zawansowaniej technologi
                    </v-card-text>
                  </v-card>
                </v-row>
          </div>
        <div
          v-for="(item, index) in wykopy"
         :key="index"
          class="pt-10"
        >
          <v-card
              class="mx-auto hidden-lg-and-up "
              max-width="344"
              max-height="100%"
              color="theme--dark"

          >
            <v-img
                :src="item.src"
                height="200px"
            ></v-img>

            <v-card-title class="orange--text text--lighten-1">
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle class="white--text">
              {{item.subtitle }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  icon
                  color="white"
                  @click="item.show = !item.show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="!item.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ item.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
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
      wykopy:[
        {
        title: "Szerokoprzestrzenne",
        subtitle: "Polecane są na przykład wówczas, gdy działka znajduje się na gruntach niezbyt spoistych",
        description: "Bądź wtedy, gdy dom ma być w całości lub częściowo podpiwniczony. Skarpy takiego dużego wykopu powinny być nachylone pod kątem 35-40°. Dno wykopu powinno się znaleźć poniżej poziomu przemarzania gruntu. W zależności od tego, w której strefie przemarzania gruntu znajduje się dana działka, poziom ten wynosi od 0,8 do 1,4 m. Deskowanie ław będziemy robić na wyrównanym dnie wykopu szerokoprzestrzennego.",
        show:"true",
        src: require("../assets/fundamenty/2.jpg"),
  },
        {
        title:"Ławy fundamentowe",
        subtitle: " Podstawą solidnego, dobrze wykonanego domu są fundamenty. ",
        description: "Wykonać je można za pomocą ław fundamentowych. Te zapewnią dużą wytrzymałość całej konstrukcji domu oraz są w stanie przenieść ciężar budynku ze ścian fundamentowych na grunt.",
          show:"false",
          src: "../assets/"

        },
        {
        title: "Szamba",
        subtitle:"Podziemny zbiornik",
        description:"zazwyczaj bezodpływowy, wykonany np. z betonu, do którego odprowadzane są ścieki z domowych urządzeń kanalizacyjnych.",
          show:"false",
          src: "../assets/"

        },
        {
        title:"Gaz, woda, kanalizacja",
        subtitle:"Dom bez energii elektrycznej, wody, gazu i kanalizacji jest jak komputer bez Internetu.",
        description:"Dlatego, gdy planujesz budowę domu, zadbaj o to, aby do działki doprowadzone zostały wszystkie potrzebne media.",
          show:"false",
          src: "../assets/"
        },
        {
        title:"Odwodnienia i drenaże",
        subtitle:"W celu uniknięcia zawilgocenia fundamentóœ domu lub zalenaj piwnicy warto pomyśleć o drenażu lub odwodnieniu liniowym.",
        description:"Jeżeli problemem jest zbyt wysoki poziom wód gruntowych stosujemy drenaż opaskowy. Jest to system rur drenarskich okalający budynek. Odwodnienia liniowe to system korytek i ruszty które wkopujemy minimum 3mm poniżej terenu powierzchni terenu.",
          show:"false",
          src: "../assets/"
        },
      ],
      kanalizacje: [

        {
          src: require("../assets/kanalizacje/1.jpg"),
          mobile: "../assets/inwestycjeMobile/1.jpg",
        },
        {
          src: require("../assets/kanalizacje/2.jpg"),
          mobile: require("../assets/inwestycjeMobile/2.jpg"),
        },
        {
          src: require("../assets/kanalizacje/3.jpg"),
          mobile: require("../assets/inwestycjeMobile/3.jpg"),
        },
        {
          src: require("../assets/kanalizacje/4.jpg"),
          mobile: require("../assets/inwestycjeMobile/4.jpg"),
        },
        {
          src: require("../assets/kanalizacje/5.jpg"),
          mobile: require("../assets/inwestycjeMobile/5.jpg"),
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
