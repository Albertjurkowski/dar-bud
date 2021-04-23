<template>
<v-cointeiner>
<Nav></Nav>

<v-card
  height="900"
  color="#0A0A0A"
>

</v-card>

<Footer></Footer>
</v-cointeiner>
</template>

<script>
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default {
  name: "drogiGruntowe",
  components: {
    Footer,
    Nav
}
};
</script>

<style scoped>

</style>
