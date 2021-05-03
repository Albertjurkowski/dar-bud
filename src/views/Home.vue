<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-parallax class="py-7" height="1000" max-widith="100%" src="../assets/pixcity.jpg">
      <v-card
          class="mx-auto text-center text-h1-xl justify-center"
          color="#0A0A0A"
          height="800"
          width="1750"
          v-ripple

      >

        <div
          style="padding-top: 16%"
          align="center"
        >
          <h1 style="font-size: 90px">
            <strong class=" orange--text text--lighten-1">DAR-BUD</strong>
          </h1>
          <v-card-text class="headline white--text">
            "Jakość jest najważniejsza"
          </v-card-text>
        </div>
        <router-link :to="{name:'kontakt'}" class="text-decoration-none">
        <div class="pt-11">

        <v-btn
            :color=orange
            class="ma-2 white--text "
            outlined
        >
          kontakt
          <v-icon
              right
              dark
          >
            mdi-phone-in-talk
          </v-icon>
        </v-btn>

        </div>
        </router-link>
      </v-card>
    </v-parallax>

      <v-carousel
        id="inwestycje"
        cycle
        hide-delimiters
        height="1000"
        max-widith="100%"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"

        >
          <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
        </v-carousel-item>
      </v-carousel>
    <v-card
        class=" text-h1-xl justify-center px-16 text-center"
        :color=orange
        height="1000"
        width="100%"
        id="nas"

    >
      <div style="padding-top: 8%" class="text-#0A0A0A black--text"  >
        <h1 style="font-size: 90px">
          <strong>O NAS</strong>
        </h1>
        <v-card-text class="headline pt-16">
          Firma Dar -Bud Dariusz Bednarczyk działa na rynku od 2006.
          Od samego początku stawialiśmy zarówno na sprawdzone rozwiązania, jak i nowe,
          skuteczne rozwiązania technologiczne. Specjalistyczny sprzęt, wykwalifikowana kadra, a
          także doświadczenie w realizacji inwestycji.
          W połączeniu z dokładnością praz oraz przykładaniem się do profesjonalnej
          i indywidualnej realizacji staliśmy się solidnym wykonawcą
        </v-card-text>
        <v-card
            class="mx-auto"
          style="padding-top: 5%"
          height="400"
          width="800"
        >
          Film prezentujący najlepszą technologie firmy
        </v-card>
      </div>


    </v-card>
<div  id="usluga">
    <v-card

      class="text-center text-h1-xl"
      style="padding-top: 5%"
      color="#0A0A0A"
      dark
      height="1000"
      v-ripple
    >
      <v-row>
        <v-col>
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img
            src="../assets/sprzet/spych.png"
            height="200px"
        ></v-img>

        <v-card-title>
          drogi gruntowe
        </v-card-title>

        <v-card-subtitle>
          posiadamy najlepszy sprzęt do przygotowania oraz utrzymywania dróg gruntowych
        </v-card-subtitle>



        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link :to="{name:'drogi-gruntowe'}" class="text-decoration-none">
          <v-btn
              :color=orange
              outlined
          >
            Zobacz więcej
          </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
        </v-col>
        <v-col>
      <v-card
        class="mx-auto justify-left"
        max-width="344"
      >
        <v-img
            src="../assets/sprzet/koparka.png"
            height="200px"
        ></v-img>

        <v-card-title>
          Wykopy
        </v-card-title>
        <v-card-subtitle>
          Posiadamy precyzyjny sprzęt do najbardziej wymagających wykopów.
        </v-card-subtitle>

        <v-card-actions>
            <v-spacer></v-spacer>


          <router-link :to="{name:'wykopy'}" class="text-decoration-none">
            <v-btn
                :color=orange
                outlined
            >
             Zobacz więcej
            </v-btn>
          </router-link>
        </v-card-actions>

      </v-card>
        </v-col>
        <v-col>
      <v-card
          class="mx-auto justify-left"
          max-width="344"

      >
        <v-img
            src="../assets/sprzet/ciężarówka.png"
            height="200px"
        ></v-img>

        <v-card-title>
          Rozbiurki
        </v-card-title>

        <v-card-subtitle>
          oferujemy transport oraz układanie kostki brukowej, kruszców
        </v-card-subtitle>

          <v-spacer></v-spacer>
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link :to="{name:'rozbiorka'}" class="text-decoration-none">
              <v-btn
                  :color=orange
                  outlined
              >
                Zobacz więcej
              </v-btn>
            </router-link>
          </v-card-actions>
      </v-card>
        </v-col>
        <v-col>
          <v-card
              class="mx-auto justify-left"
              max-width="344"

          >
            <v-img
                src="../assets/sprzet/małySpych.png"
                height="200px"
            ></v-img>

            <v-card-title>
              sprzęt
            </v-card-title>

            <v-card-subtitle>
              Dokładność oraz szybkość działania, dzięki precyzyjnym urządzeniom
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <router-link :to="{name:'urzadzenia'}" class="text-decoration-none">
              <v-btn
                  :color=orange
                  outlined
              >
                Zobacz więcej
              </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>





      <v-row style="padding-top: 5%">
        <v-col>

          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                src="../assets/sprzet/smallciezarowka.png"
                height="200px"
            ></v-img>

            <v-card-title>
              drogi gruntowe
            </v-card-title>
            <v-card-subtitle>
              posiadamy najlepszy sprzęt do przygotowania oraz utrzymywania dróg gruntowych
            </v-card-subtitle>



            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link :to="{name:'kruszce'}" class="text-decoration-none">
                <v-btn
                    :color=orange
                    outlined
                >
                 Zobacz więcej
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>

        </v-col>
        <v-col>
          <v-card
              class="mx-auto justify-left"
              max-width="344"
          >
            <v-img
                src="../assets/sprzet/koparka.png"
                height="200px"
            ></v-img>

            <v-card-title>
              Wykopy
            </v-card-title>

            <v-card-subtitle>
              Posiadamy precyzyjny sprzęt do najbardziej wymagających wykopów.
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  :color=orange
                  outlined
              >
                Zobacz więcej
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="mx-auto justify-left"
              max-width="344"

          >
            <v-img
                src="../assets/sprzet/ciężarówka.png"
                height="200px"
            ></v-img>

            <v-card-title>
              transport
            </v-card-title>

            <v-card-subtitle>
              oferujemy transport oraz układanie kostki brukowej, kruszców
            </v-card-subtitle>

            <v-spacer></v-spacer>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  :color=orange
                  outlined
              >
                Zobacz więcej
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="mx-auto justify-left"
              max-width="344"

          >
            <v-img
                src="../assets/sprzet/małySpych.png"
                height="200px"
            ></v-img>

            <v-card-title>
              sprzęt
            </v-card-title>

            <v-card-subtitle>
              Dokładność oraz szybkość działania, dzięki precyzyjnym urządzeniom
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  :color=orange
                  outlined
              >
                Zobacz więcej
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-card>
</div>
    <Footer></Footer>
  </v-cointeiner>
</template>
<script>

import Nav from "@/components/nav.vue";
import Footer from "@/components/footer";


export default {

  name: 'Home',
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
          src: require("../assets/drogastreet.jpg"),
          title: "We are creative"
        },
        {
          src: require("../assets/pixdroga.jpg"),
          title: "We are hard worker"
        },
        {
          src: require("../assets/pixspeed.jpg"),
          title: "We are professional"
        }
      ]
    };
  }
}
</script>
