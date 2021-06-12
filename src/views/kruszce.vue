<template>
  <v-cointeiner>
  <Nav></Nav>
    <v-card
  class="pt-10"
    >
      <v-img
          src="../assets/kruszce/pixkamyczki.jpg"
          :height=heightback
      >
    <v-row class="pt-16 mx-auto">
      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card :width="height" class=" mx-auto justify-center" >
        <v-simple-table dark>
            <thead>
            <tr>
              <th class="text-left" >
                Kruszce
              </th>
              <th class="text-left">
                rozmiar w mm
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in desserts"
                :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
            </tbody>
        </v-simple-table>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card :width="height" class="mx-auto justify-center">
      <v-simple-table dark>
            <thead >
            <tr class="hidden-md-and-down" >
              <th class="text-left" >
                Kruszce
              </th>
              <th class="text-left">
                rozmiar w mm
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in second"
                :key="item.name"

            >
              <td>{{ item.name }}</td>
              <td >{{ item.calories }}</td>
            </tr>
            </tbody>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
      </v-img>
    </v-card>
    <Footer></Footer>
  </v-cointeiner>
</template>
<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "kruszce",
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
    heightback () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1500
        case 'sm': return 1480
        case 'md': return 1450
        case 'lg': return 800
        case 'xl': return 840
        default: return 1920
      }
    }
  },
  data() {
    return {
      dialog: false,
      orange: "orange lighten-1",
      desserts: [
        {
          name: '\n' +
              'piasek płukany sortowany ',
          calories:  0.2,
        },
        {
          name: 'piasek do tynkowania',
          calories: 0.1,
        },
        {
          name: 'pospółka',
          calories: "",
        },
        {
          name: 'piasek wiślany',
        },
        {
          name: 'piasek podsypkowy pod kostkę',
        },
        {
          name: 'piasek na zasypkę fundamentów',

        },
        {
          name: 'piasek szklarski kwarcowy',

        },
        {
          name: 'kamienie, otoczaki, głazy',
        },
        {
          name: 'tłucznie łamane, kamienne różne frakcje',
        },
        {
          name: 'mieszanki (dolomitowe, kwarcytowe lub wapienne)',
          calories:  '0-31,5; 0-63 ',
        },

        {
          name: 'kliniec (dolomitowy, kwarcytowy lub wapienny)',
          calories:  '4-31,5',
        },
        {
          name: 'tłuczeń (dolomitowy, kwarcytowy lub wapienny)',
          calories:  ' 31,5-63 ',
        },
        {
          name: 'tłuczeń  (kwarcytowy)',
          calories:  '31,5-50 ',
        },
      ],
      second:[
        {
          name: 'grysy (dolomitowe, kwarcytowe lub wapienne)',
          calories:  '2-8 ',
        },

        {
          name: 'grysy (dolomitowe, kwarcytowe lub wapienne)',
          calories:  '8-16',
        },
        {
          name: 'ziemia ogrodowa, czarnoziem',
          calories:  '',
        },
        {
          name: 'ziemia na podwyższenie terenu',
          calories:  '',
        },
        {
          name: 'żwir różne frakcje',
          calories:  '',
        },
        {
          name: 'żwir',
          calories:  '2-8',
        },
        {
          name: 'żwir',
          calories:  ' 8-16'
        },
        {
          name: 'żwir',
          calories:  '16-32',
        },
        {
          name: 'płyty drogowe',
          calories:  '',
        },
        {
          name: 'kruszywa budowlane',
          calories:  '',
        },
        {
          name: 'kruszywa drogowe',
          calories:  '',
        },
        {
          name: 'kruszywo betonowe',
          calories:  '',
        },
        {
          name: 'cegła rozbiórkowa',
          calories:  '',
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
