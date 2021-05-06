<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        height="95%"
        color="#0A0A0A"
    >
      <div style="padding-top: 5%" class="text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Sprzęt</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
        Nasze usługi są wykonywane przez wykwalifikowanych pracowników oraz nowoczesne technologie.
        </v-card-text>
      </div>
      <v-row>
      <div
        v-for="(item,i) in items"
        :key="i"
      >
        <v-row>
        <v-card
          class="mx-auto ml-16 "
          color="theme--dark"
          width="600"
          style="margin-top: 10%"



              >
                <v-img
                    :src="item.src"
                    :aspect-ratio="16/9"
                ></v-img>
                <v-card-text
                    class="pt-6"
                    style="position: relative;"
                >

                  <div class="font-weight-light grey--text title mb-2">
                    {{ item.subtitle }}
                  </div>
                  <h3 class="display-1 font-weight-light orange--text mb-2">
                    {{ item.title }}
                  </h3>
                  <div class="font-weight-light title mb-2">
                    {{ item.describe }}
                  </div>
                </v-card-text>
              </v-card>
        </v-row>
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
  data() {
    return {
      items: [
        {
          src: require("../assets/sprzet/koparka.png"),
          title:"koparka",
          subtitle: " ets-213",
          describe: "koparka o wadze 8t najlepsza do kopania w najtrudniejszych warunkach jej ramie siega do 20 m ",
        },
        {
          src: require("../assets/sprzet/spych.png"),
          title:"Baukema",
          subtitle: "SHM 3-100",
          describe: "Maszyna służąca głównie do profilowania podłoży pod nawierzchnię dróg, rowów i poboczy, wyrównywania nasypów. Stosowane są również do mieszania materiałów drogowych w procesie stabilizacji, do zrywania starej nawierzchni, trawników itp. oraz do wyrównywania powierzchni pola roboczego",
        },
        {
          src: require("../assets/sprzet/klamer.png"),
          title:"kramer",
          subtitle: " cat hw-018",
          describe: " udźwig do 1 tony, jego wymiary pozwalają dostarczyć potrzebne materiały w krótkim czasie",
        },
        {
          src: require("../assets/sprzet/smallciezarowka.png"),
          title:"Iveco",
          subtitle: "Deyli",
          describe: "samochód dostawczy o dopuszczalnej ładowności 3,5 tony",
        },
        {
          src: require("../assets/sprzet/ciężarówka.png"),
          title:"samochód ciężarowy",
          subtitle: "as-78",
          describe: "pozwala w szybki i bezpieczny sposób załadować oraz rozładować ładunek, dzięki wbudowanemu dźwigowi",
        },
        {
          src: require("../assets/sprzet/gosienica.png"),
          title:"Liebherr",
          subtitle: "926",
          describe: "waga 28 ton, systemem niwelacji terenu 3D. Wyposażenie: głowica uchylno-obrotowa",
        },
        {
          src: require("../assets/sprzet/scania.png"),
          title:"samochód ciężarowy",
          subtitle: "as-78",
          describe: "",
        }
      ],
    };
  }
};
</script>

<style scoped>

</style>
