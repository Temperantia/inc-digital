<template>
  <v-app>
    <Header></Header>
    <v-main>
      <nuxt />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import headerComp from "@/components/header";
import footerComp from "@/components/footer";
export default {
  components: {
    Header: headerComp,
    Footer: footerComp,
  },
};
</script>