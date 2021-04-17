<template>
  <v-card>
    <v-toolbar extended color="grey darken-4">
      <v-flex class="pt-14">
        <v-img  src="../assets/LOGO DAR BUD bez tla.png" alt="dar-bud" height="150" width="355.28340081" class="pt-1"/>
      </v-flex>
        <v-spacer></v-spacer>
      <v-row
        align="center"
        justify="space-around"
        class="pt-10"
      >
        <v-btn
          text
          color="grey lighten-3"
        >
          referencje
        </v-btn><v-btn
          text
          color="grey lighten-3"
        >
          o nas
        </v-btn>
        <v-btn
          text
          color="grey lighten-3"
        >
          inwestycje
        </v-btn>
        <v-btn
          text
          color="grey lighten-3"
        >
          usługi
        </v-btn>

        <v-btn
            color="orange lighten-1"
            class="ma-2 white--text"
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
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    name: 'nav',

    data: () => ({
    }),
  }
</script>
<style>
</style>
