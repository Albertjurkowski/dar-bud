<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card color="#0A0A0A"
            width="100%"
            height="950"
            class=" pt-14 d-flex align-content-center flex-wrap"
            flat
            tile
    >
      <v-card
          class="mx-auto d-flex align-content-center flex-wrap "

          color="#1E1E1E"
          height="83%"
          width="85%"
          outlined
          tile
      >
        <v-container class="mx-auto text-center text--white" >
          <v-row>
            <v-col  xs="12" sm="12" md="4" lg="4" xl="4">
              <v-progress-circular
                :rotate="-90"
                :size=size
                :width="15"
                :value="value"
                :color=orange

              >
                <v-col>
              <h1 class="text-center">{{ value }}%</h1>
                  <div class="pt-5">
                <v-row>doświadczonych <br> pracowników</v-row>
                  </div>
                </v-col>
              </v-progress-circular>
                </v-col>
                <v-col  xs="12" sm="12" md="4" lg="4" xl="4">
              <v-progress-circular
                  :rotate="-90"
                  :size=size
                  :width="15"
                  :value="year"
                  :color=orange
                  class="ml-lg-16"
              >
                <v-col>
                  <h1 class="text-center">{{ year }}%</h1>
                  <div class="pt-5 mx-10" >
                    <v-row>najnowszej technologi </v-row>
                  </div>
                </v-col>
              </v-progress-circular>
                </v-col>
                <v-col  xs="12" sm="12" md="4" lg="4" xl="4">
              <v-progress-circular
                  :rotate="-90"
                  :size=size
                  :width="15"
                  :value="project"
                  :color=orange
                  class="ml-lg-16"
              >
                <v-col>
                  <h1 class="text-center">{{ lat }} lat</h1>
                  <div class="pt-5 text-center">
                    <v-row></v-row><v-row> doświadczenia</v-row>
                  </div>
                </v-col>
              </v-progress-circular>
            </v-col>
          </v-row>
        </v-container>
        <router-link @click.native="scrollToTop"  :to="{name:'kontakt'}" class="text-decoration-none">
        <div class="pt-11">

        </div>
        </router-link>
      </v-card>
    </v-card>
      <v-carousel
        class="hidden-sm-and-down"
        hide-delimiters
        height="1000"
        max-widith="100%"
        hide-delimiter-background
        show-arrows-on-hover
        id="inwestycje"
      >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        >

        </v-carousel-item>
      </v-carousel>
    <v-carousel
        cycle
        hide-delimiters
        max-widith="100%"
        hide-delimiter-background
        show-arrows-on-hover
        class="hidden-md-and-up"
    >
    <v-carousel-item
        v-for="(smart,index) in mobiles"
        :key="index"
        :src="smart.mobile"
    >
    </v-carousel-item>
    </v-carousel>
    <v-card
        class=" text-h1-xl text-center pt-8"
        :color=orange
        id="nas"
    >
      <div class="text-#0A0A0A black--text pt-5">
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
         <div class="videoWrapper mx-auto align-self-center py-10">
           <iframe :height=height :width=width  src="https://www.youtube.com/embed/OxE7F14MLp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </div>


    </v-card>
    <div  id="usluga">
     <v-card
      class="text-center py-10"
      color="#0A0A0A"
      dark

    >
       <v-row>
        <div
          v-for="(item, i) in uslugi"
          :key="i"
          class=" py-10 mx-auto"
        >
          <v-card
              max-width="380"
          >

            <v-img
                :src=item.src
                height="200px"
            ></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.subtite}}
            </v-card-subtitle>



            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link @click.native="scrollToTop" :to="{name:item.more}" class="text-decoration-none">
                <v-btn
                    :color=orange
                    outlined
                >Zobacz więcej
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
       </div>
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
  computed: {
    size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 180
        case 'sm': return 200
        case 'md': return 250
        case 'lg': return 300
        case 'xl': return 400
        default:
          return 344
      }
    },
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 157
        case 'sm': return 315
        case 'md': return 315
        case 'lg': return 630
        case 'xl': return 1060
        default:
          return 300
      }
    },
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 280
        case 'sm': return  560
        case 'md': return  560
        case 'lg': return 1080
        case 'xl': return 2160
        default:
          return 300
      }
    },
  },
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
      uslugi:[
        {
          src: require("../assets/sprzet/spychbok.png"),
          title:"drogi gruntowe",
          subtite:" posiadamy najlepszy sprzęt do przygotowania oraz utrzymywania dróg gruntowych",
          more:"drogi-gruntowe",
        },
        {
          src: require("../assets/sprzet/koparka.png"),
          title:"Wykopy",
          subtite:" Posiadamy precyzyjny sprzęt do najbardziej wymagających wykopów.",
          more:"wykopy",
        },
        {
          src: require("../assets/sprzet/volvo.png"),
          title:"Rozbiurki",
          subtite:"oferujemy transport oraz układanie kostki brukowej, kruszców",
          more:"rozbiorka",
        },
        {
          src: require("../assets/sprzet/scania.png"),
          title:"Sprzęt",
          subtite:"Dokładność oraz szybkość działania, dzięki precyzyjnym urządzeniom\n",
          more:"urzadzenia",
        },
        {
          src: require("../assets/sprzet/smallciezarowka.png"),
          title:"Chodniki oraz parkingi",
          subtite:"Posiadamy wysoko zautomatyzoway mechanizm układania bruku\n",
          more:"chodnikiParkingi",
        },
        {
          src: require("../assets/sprzet/gosienica.png"),
          title:"Kruszce",
          subtite:"Posiadamy w naszej ofercie wielę kruszcy na sprzedaż.\n",
          more:"kruszce",
        },
        {
          src: require("../assets/sprzet/kopareczka.png"),
          title:"Ogrodzenia",
          subtite:"Budujemy ogrodzenia: murowane, metalowe, drewniane, kompozytowe, gabionowe\n",
          more:"ogrodzenia",
        },
        {
          src: require("../assets/sprzet/klamer.png"),
          title:"Budynki użyteczności publicznej",
          subtite:"Dokładność oraz jakość, dzięki precyzyjnym urządzeniom\n",
          more:"budynki",
        },
          ],
      mobiles:[
        {
          mobile: require("../assets/inwestycjeMobile/1.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/2.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/3.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/4.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/5.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/6.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/7.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/8.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/9.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/10.jpg"),
        },
        {
          mobile: require("../assets/inwestycjeMobile/11.jpg"),
        },

      ],
      items: [
        {
          src: require("../assets/inwestycje/1.jpg"),

        },
        {
          src: require("../assets/inwestycje/2.jpg"),
        },
        {
          src: require("../assets/inwestycje/3.jpg"),
        },
        {
          src: require("../assets/inwestycje/4.jpg"),
        },
        {
          src: require("../assets/inwestycje/5.jpg"),
        },
        {
          src: require("../assets/inwestycje/6.jpg"),
        },
        {
          src: require("../assets/inwestycje/7.jpg"),
        },
        {
          src: require("../assets/inwestycje/8.jpg"),
        },
        {
          src: require("../assets/inwestycje/9.jpg"),
        },
        {
          src: require("../assets/inwestycje/10.jpg"),
        },
        {
          src: require("../assets/inwestycje/11.jpg"),
        },
        {
          src: require("../assets/inwestycje/12.jpg"),
        },
        {
          src: require("../assets/inwestycje/13.jpg"),
        },
        {
          src: require("../assets/inwestycje/14.jpg"),
        },
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
  },


}
</script>
<style scoped>

</style>
