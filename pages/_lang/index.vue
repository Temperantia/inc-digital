<template>
  <v-container class="pa-0">
    <home-page-desktop class="hidden-sm-and-down"></home-page-desktop>
    <home-page-mobile class="hidden-md-and-up"></home-page-mobile>
  </v-container>
</template>

<script>
import HomePageDesktopVue from "../../components/homePageDesktop.vue";
import HomePageMobileVue from "../../components/homePageMobile.vue";
export default {
  components: {
    homePageMobile: HomePageMobileVue,
    homePageDesktop: HomePageDesktopVue,
  },
};
</script>