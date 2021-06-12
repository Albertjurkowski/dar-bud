<template>
  <v-cointeiner>
    <Nav></Nav>
    <v-card
        class="hidden-md-and-down"
        height="100%"
        color="#0A0A0A"
    >
      <div class="pt-16 text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Referencje</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
          Działania naszej firmy są potwierdzone przez największych zleceniodawców.
        </v-card-text>
      </div>
      <div class="hidden-md-and-down">
        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style=" font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> URZĄD MIASTA MILENIÓWKA</strong>
            </h1>

            <v-card-text class="headline pt-10 white--text" >
              Wymienione prace zostały wykonane z należytą starannością, terminowo, zgodnie z umową.
            </v-card-text>
          </v-card>
          <v-card height="562.5" width="750"><img src="../assets/rozbiurki/5.jpg" alt="rozbiurka" width="100%" height="100%"> </v-card>
        </v-row>

        <v-row align="center" class="mx-auto justify-center pt-16">
          <v-card height="562.5" width="750"><img src="../assets/fundamenty/3.jpg" alt="ławy fundamentalne" width="100%" height="100%"></v-card>
          <v-card height="562.5" width="750" color="theme--dark">
            <h1 style="font-size: 50px" class="orange--text text--lighten-1 pt-9 text-center">
              <strong> BURMISTRZ MIASTA MILENIÓWEK </strong>
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

      height="85%"
      color="#0A0A0A"
      class="hidden-lg-and-up pa-16 ">
      <div class="pt-16 text-center">
        <h1 style="font-size: 70px" class="orange--text text--lighten-1">
          <strong>Referencje</strong>
        </h1>
        <v-card-text class="headline pt-10 white--text" >
          Działania naszej firmy są potwierdzone przez największych zleceniodawców.
        </v-card-text>
      </div>
    <div
        v-for="(item, index) in wykopy"
        :key="index"
        class="pt-10

"
    >
      <v-card

          class="mx-auto hidden-lg-and-up "
          max-width="344"
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
  name: "referencje",
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
          title: "URZĄD MIASTA MILENIÓWKA",
          description: "Wymienione prace zostały wykonane z należytą starannością, terminowo, zgodnie z umową.",
          src: "../assets/rozbiurki/",
          show:"false",

        },
        {
          title:"B. MIASTA  MILENIÓWEK",
          description: "całość powierzonych prac została wykonana z należytą starannością terminowo, zgodnie z umową. Firma Dariusz Bednarczyk DAR-BUD, odznaczając się należytą wiedzą i doświadczeniem, gwarantuje dobrą jakość świadczonych usług.",
          src: "../assets/",
          show:"false",
        },
        {
          title: "URZĄD GMINY ŻABIA WOLA",
          description:"Roboty zostały wykonane terminowo w sposób należyty, zgodnie z Umową, dokumentacją techniczną, przepisami prawa budowlanego oraz zasadami sztuki budowlanej i prawidłowo ukończone.",
          show:"false",
          src: "../assets/"
        },
        {
          title:"STRABAG",
          description:"firma wykonała i ukończyła prace prawidłowo, w terminie, z należytą starannością, zgodnie z kontraktem i zasadami sztuki budowlanej",
          show:"false",
          src: "../assets/"
        },
      ],
      };
  }
};
</script>

<style scoped>

</style>
