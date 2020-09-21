<template>
  <v-container class="pa-0">
    <home-page-desktop v-if="this.$vuetify.breakpoint.mdAndUp"></home-page-desktop>
    <home-page-mobile v-else></home-page-mobile>
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