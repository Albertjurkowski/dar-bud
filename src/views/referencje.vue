<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
      class="hidden-md-and-down"
      height="100%"
      color="#0A0A0A"
    >
      <div class="pt-16 text-center">
        <v-card-text class="d-flex justify-center text-h2  orange--text text--lighten-1">Referencje</v-card-text>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
          Działania naszej firmy są potwierdzone przez największych zleceniodawców.
        </v-card-text>
        </div>
      <div class="hidden-md-and-down">
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <v-card-title class="pt-9 d-flex justify-center text-h4  orange--text text--lighten-1">URZĄD MIASTA MILENIÓWKA</v-card-title>
            <v-card-text class="headline pt-10 white--text" >
              Wymienione prace zostały wykonane z należytą starannością, terminowo, zgodnie z umową.
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750" color="orange lighten-1" class="d-flex align-content-center flex-wrap justify-center">
            <div class="text-center">
                <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      id="colo"
                      :elevation="hover ? 16 : 2"
                      :class="{ 'on-hover': hover }"
                    >
                      <v-img
                          v-bind="attrs"
                          v-on="on"
                          width="300"
                          src="../assets/referencje/6.jpg"
                      >
                        <v-card-title class="text-h6 white--text">
                          <v-row
                              class="justify-end align-end"
                          >
                              <v-btn
                                :class="{ 'show-btns': hover }"
                                :color="transparent"
                                icon
                                large

                              >
                                <v-icon
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  x-large

                                >
                                  mdi-fullscreen
                                </v-icon>
                              </v-btn>
                          </v-row>
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-hover>
                  </template>
                </v-dialog>
              </div>
            <v-dialog
              v-model="dialog"
              height="100%"
            >
                <v-card>
                <v-img      @click="dialog = false" src="../assets/referencje/6.jpg">
                  <v-row
                    class="justify-end align-end mr-7 pt-7"
                >
                  <v-btn
                      color="black"
                      icon
                      large
                  >
                    <v-icon
                        color="black"
                        x-large
                    >
                      mdi-fullscreen-exit
                    </v-icon>
                  </v-btn>
                </v-row></v-img>
                </v-card>
            </v-dialog>
            </v-card>
        </v-row>
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750"><img src="../assets/fundamenty/3.jpg" alt="ławy fundamentalne" width="100%" height="100%"></v-card>
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> BURMISTRZ MIASTA MILANÓWEK </strong>
            </h1>
            <v-card-text class="headline pt-10 white--text" >
              Całość powierzonych prac została wykonana z należytą starannością terminowo, zgodnie z umową. Firma Dariusz Bednarczyk DAR-BUD, odznaczając się należytą wiedzą i doświadczeniem, gwarantuje dobrą jakość świadczonych usług.
            </v-card-text>
          </v-card>
        </v-row>
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> URZĄD GMINY ŻABIA WOLA </strong>
            </h1>
            <v-card-text class="headline pt-10 white--text" >
              Roboty zostały wykonane terminowo w sposób należyty, zgodnie z Umową, dokumentacją techniczną, przepisami prawa budowlanego oraz zasadami sztuki budowlanej i prawidłowo ukończone.
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750"><img src="../assets/rozbiurki/5.jpg"  alt="rozbiurka" width="100%" height="100%"></v-card>
        </v-row>
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750"><img src="../assets/rozbiurki/5.jpg"  alt="rozbiurka" width="100%" height="100%"></v-card>
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> STRABAG </strong>
            </h1>
            <v-card-text class="headline pt-10 white--text" >
              firma wykonała i ukończyła prace prawidłowo, w terminie, z należytą starannością, zgodnie z kontraktem i zasadami sztuki budowlanej
            </v-card-text>
          </v-card>
        </v-row>
      </div>
    </v-card>
    <v-card
      max-height="100%"
      color="#0A0A0A"
      class="hidden-lg-and-up pa-16 ">
      <div class="pt-16 text-center">
        <v-card-text class="d-flex justify-center text-h2  orange--text text--lighten-1">Referencje</v-card-text>
        <v-card-text class="d-flex justify-center text-h6 pt-10 white--text" >
          Działania naszej firmy są potwierdzone przez największych zleceniodawców.
        </v-card-text>
      </div>
    <div
      v-for="(item, index) in referencje"
      :key="index"
      class="pt-10 hidden-lg-and-up"
    >
      <v-card
        class="mx-auto"
        max-width="344"
        color="theme--dark"
      >
        <div class="text-center d-flex align-content-center flex-wrap justify-center">
          <v-img
            width="150"
            :src="item.src"
             @click="sdialog = true"
          >
            <v-dialog
                v-model="sdialog"
                height="100%"
            >
              <v-card>
                <v-img
                  :src="item.src"
                   @click="sdialog = false"
                ></v-img>
              </v-card>
            </v-dialog>
          </v-img>
        </div>
        <v-card-text class=" text-h6 orange--text text--lighten-1">
          {{ item.title }}
        </v-card-text>
        <v-card-subtitle class="white--text">
          {{ item.description }}
        </v-card-subtitle>
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
  name: "referencje",
  components: {
    Footer,
    Nav
  },
  data() {
    return {
      show: false,
      dialog: false,
      sdialog: false,
      transparent: 'rgba(255, 255, 255, 0)',
      orange: "orange lighten-1",
      methods:{
      },
      referencje:[
        {
          title: "URZĄD MIASTA MILANÓWEK",
          description: "Wymienione prace zostały wykonane z należytą starannością, terminowo, zgodnie z umową.",
          src: require("../assets/referencje/1.jpg"),
          show:"false",

        },
        {
          title:"B. MIASTA  MILANÓWEK",
          description: "całość powierzonych prac została wykonana z należytą starannością terminowo, zgodnie z umową. Firma Dariusz Bednarczyk DAR-BUD, odznaczając się należytą wiedzą i doświadczeniem, gwarantuje dobrą jakość świadczonych usług.",
          src: require("../assets/referencje/2.jpg"),
          show:"false",
        },
        {
          title: "URZĄD GMINY ŻABIA WOLA",
          description:"Roboty zostały wykonane terminowo w sposób należyty, zgodnie z Umową, dokumentacją techniczną, przepisami prawa budowlanego oraz zasadami sztuki budowlanej i prawidłowo ukończone.",
          show:"false",
          src: require("../assets/referencje/3.jpg")
        },
        {
          title:"STRABAG",
          description:"firma wykonała i ukończyła prace prawidłowo, w terminie, z należytą starannością, zgodnie z kontraktem i zasadami sztuki budowlanej",
          show:"false",
          src: require("../assets/referencje/4.jpg")
        },
      ],
      };
  }
};
</script>

<style scoped>
#colo {
  transition: opacity .4s ease-in-out;

}
#colo.on-hover {
  opacity: 0.6;
}
.show-btns {
  color: black !important;
}
</style>
