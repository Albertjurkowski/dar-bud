<template>
  <v-cointeiner>
  <Nav></Nav>
<div>
  <v-icon
  >
    image-filter-hdr
  </v-icon></div>
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
  data() {
    return {
      dialog: false,
      items: [
        {
          src: require("../assets/kruszce/P1010072.jpg"),
          title:"praw",
          subtitle: "",
          describe: "",
        },
        {
          src: require("../assets/kruszce/P1010073.jpg"),
          title:"lewo",
          subtitle: "",
          describe: "",
        },
        {
          src: require("../assets/kruszce/P1010075.jpg"),
          title:"",
          subtitle: "",
          describe: "",
        },

      ],
    };
  }
};
</script>

<style scoped>

</style>
