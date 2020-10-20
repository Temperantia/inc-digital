<template>
  <v-app>
    <Drawer v-model="drawerState"></Drawer>
    <Header v-on:fromChild="changeDrawerStatus"></Header>
    <v-main>
      <nuxt />
    </v-main>
    <Footer></Footer>
    <CookieConsent></CookieConsent>
  </v-app>
</template>

<script>
import headerComp from "@/components/header";
import footerComp from "@/components/footer";
import drawer from "@/components/drawer.vue";
import cookieConsent from "@/components/cookieConsent.vue";

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
    CookieConsent: cookieConsent,
  },
};
</script>
