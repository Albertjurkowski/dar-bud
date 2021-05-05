<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card class="py-16" height="950" max-widith="100%" color="#0A0A0A" >
      <v-card
          class="mx-auto text-center text-h1-xl justify-center"
          color="#1E1E1EFF"
          height="800"
          width="1750"
          v-ripple

      >
        <div
          style="padding-top: 14%"
        >
            <div class="text-center text--white">
              <v-progress-circular
                :rotate="-90"
                :size="300"
                :width="15"
                :value="value"
                :color=orange
                class="ml-16"
              >
                <v-col>
              <h1 class="text-center">{{ value }}%</h1>
                  <div class="pt-5">
                <v-row>doświadczonych pracowników</v-row>
                  </div>
                </v-col>
              </v-progress-circular>

              <v-progress-circular
                  :rotate="-90"
                  :size="300"
                  :width="15"
                  :value="year"
                  :color=orange
                  class="ml-16"
              >
                <v-col>
                  <h1 class="text-center">{{ year }}%</h1>
                  <div class="pt-5 mx-10" >
                    <v-row>najnowszej technologi budownictwa</v-row>
                  </div>
                </v-col>
              </v-progress-circular>
              <v-progress-circular
                  :rotate="-90"
                  :size="300"
                  :width="15"
                  :value="project"
                  :color=orange
                  class="ml-16"
              >
                <v-col>
                  <h1 class="text-center">{{ lat }} lat</h1>
                  <div class="pt-5 text-center">
                    <v-row></v-row><v-row> doświadczenia</v-row>
                  </div>
                </v-col>
              </v-progress-circular>

            </div>
        </div>
        <router-link @click.native="scrollToTop"  :to="{name:'kontakt'}" class="text-decoration-none">
        <div class="pt-11">

        </div>
        </router-link>
      </v-card>
    </v-card>

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

        <v-card-subtitle class="text-md-h5" >
          Firma Dar -Bud Dariusz Bednarczyk działa na rynku od 2006.
          Od samego początku stawialiśmy zarówno na sprawdzone rozwiązania, jak i nowe,
          skuteczne rozwiązania technologiczne. Specjalistyczny sprzęt, wykwalifikowana kadra, a
          także doświadczenie w realizacji inwestycji.
          W połączeniu z dokładnością praz oraz przykładaniem się do profesjonalnej
          i indywidualnej realizacji staliśmy się solidnym wykonawcą
        </v-card-subtitle>

          <iframe width="700" height="393" src="https://www.youtube.com/embed/WYtxZQhBaL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      </div>


    </v-card>
<div  id="usluga">
    <v-card

      class="text-center text-h1-xl py-10"
      color="#0A0A0A"
      dark
      height="100%"
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
          <router-link @click.native="scrollToTop" :to="{name:'drogi-gruntowe'}" class="text-decoration-none">
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


          <router-link @click.native="scrollToTop" :to="{name:'wykopy'}" class="text-decoration-none">
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
            <router-link @click.native="scrollToTop" :to="{name:'rozbiorka'}" class="text-decoration-none">
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

              <router-link @click.native="scrollToTop" :to="{name:'urzadzenia'}" class="text-decoration-none">
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
              <router-link @click.native="scrollToTop" :to="{name:'kruszce'}" class="text-decoration-none">
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
      interval: {},
      value: 0,
      year: 0,
      lat: 0,
      project: 0,
      orange: "orange lighten-1",
      player: "",
      done: false,
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
  },
  mounted () {

    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 100)
      }
      this.value += 10
    }, 400)

    this.interval = setInterval(() => {
      if (this.year === 100) {
        return (this.year = 100)
      }
      this.year += 10
    }, 400);

    this.interval = setInterval(() => {
      if (this.project === 100) {
        return (this.project = 100)
      }
      this.project += 10
    }, 400)
    this.experience = setInterval(() => {
      if (this.lat === 15) {
        return (this.lat = 15)
      }
      this.lat += 1
    }, 300)
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
