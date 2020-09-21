<template>
  <v-app>
    <Drawer v-model="drawerState"></Drawer>
    <Header v-on:fromChild="changeDrawerStatus"></Header>
    <v-main>
      <nuxt />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import headerComp from "@/components/header";
import footerComp from "@/components/footer";
import drawer from "@/components/drawer.vue";

export default {
  inherit: true,
  data() {
    return {
      drawerState: false,
    };
  },
  methods: {
    changeDrawerStatus() {
      this.drawerState = !this.drawerState;
    },
  },
  components: {
    Header: headerComp,
    Footer: footerComp,
    Drawer: drawer,
  },
};
</script>