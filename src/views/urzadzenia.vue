<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        class="pt-10"
      height="95%"
      color="#0A0A0A"
      width="100%"
    >
      <div  class="text-center py-10">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Sprzęt</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
        Nasze usługi są wykonywane przez wykwalifikowanych pracowników oraz nowoczesne technologie.
        </v-card-text>
      </div>
      <v-row>
      <div
        v-for="(item, i) in items"
        :key="i"
        class="py-4"
      >
        <v-card
            class="text-h1-xl ml-8"
            justify="center"
            color="#0A0A0A"
            dark

        >
        <v-card
            :width="height"
        >
          <v-img
            :height=car
            :src="item.src"
          ></v-img>
            <v-card-text
              class="pt-6"
              style="position: relative"
            >
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
                <div v-show="item.show">
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ item.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card-text>
        </v-card>
        </v-card>
      </div>
      </v-row>
    </v-card>

    <Footer></Footer>
  </v-cointeiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "urzadzenia",
  components: {
    Footer,
    Nav
  },
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 340
        case 'sm': return 350
        case 'md': return 420
        case 'lg': return 570
        case 'xl': return 800
        default: return 344
      }
    },
    car () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 200
        case 'sm': return 200
        case 'md': return 250
        case 'lg': return 300
        case 'xl': return 400
        default: return 200
      }
    },
  },
  data() {
    return {
      items: [
        {
          src: require("../assets/sprzet/koparka.png"),
          title:"Liebherr",
          subtitle: "A914",
          description: "Koparka  Compact Litronic w wadze 16 ton przeznaczona do kopania i przenoszenia urobku sypkiego.maksymalny zasięg maszyny 8,55 metra",
          show: false
        },
        {
          src: require("../assets/sprzet/spych.png"),
          title:"Baukema",
          subtitle: "SHM 3-100",
          description: "Maszyna służąca głównie do profilowania podłoży pod nawierzchnię dróg, rowów i poboczy, wyrównywania nasypów. Stosowane są również do mieszania materiałów drogowych w procesie stabilizacji, do zrywania starej nawierzchni, trawników itp. oraz do wyrównywania powierzchni pola roboczego",
          show: false
        },
        {
          src: require("../assets/sprzet/klamer.png"),
          title:"kramer",
          subtitle: "650",
          description: "Ładowarka  3.9 tony  wyposażona w osprzęty : widły paletowe, łyżka uchylna i zwykła łyżka tzw szufla służy do rozładunku i załadunku lub przewozu palet , piasku i kruszyw.",
          show: false
        },
        {
          src: require("../assets/sprzet/smallciezarowka.png"),
          title:"Iveco",
          subtitle: "Deyli",
          description: "samochód dostawczy o dopuszczalnej ładowności 3,5 tony",
          show: false
        },
        {
          src: require("../assets/sprzet/ciężarówka.png"),
          title:"samochód ciężarowy",
          subtitle: "as-78",
          description: "pozwala w szybki i bezpieczny sposób załadować oraz rozładować ładunek, dzięki wbudowanemu dźwigowi",
          show: false
        },
        {
          src: require("../assets/sprzet/gosienica.png"),
          title:"Liebherr",
          subtitle: "926",
          description: "waga 28 ton, systemem niwelacji terenu 3D. Wyposażenie: głowica uchylno-obrotowa",
          show: false
        },
        {
          src: require("../assets/sprzet/kopareczka.png"),
          title:"mala koparka",
          subtitle: "as-78",
          description: "",
          show: false
        },
        {
          src: require("../assets/sprzet/volvo.png"),
          title:"mala koparka",
          subtitle: "as-78",
          description: "",
          show: false
        }
      ],
    };
  },
  methods:{
  }
};
</script>

<style scoped>

</style>
