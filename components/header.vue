<template>
  <v-app-bar
    flat
    :color="backgroundColor"
    fixed
    v-scroll="onScroll"
    :style="navbarStyle"
  >
    <v-img
      src="/logo_black_text.png"
      max-height="40px"
      contain
      class="ma-2 pa-2 ml-8 hidden-sm-and-down"
    ></v-img>
    <v-img
      src="/incDigitalLogoSmall.png"
      max-height="40px"
      contain
      class="ml-8 hidden-md-and-up"
    ></v-img>
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon
      color="white"
      class="hidden-md-and-up"
      @click="changeDrawerStatus()"
    ></v-app-bar-nav-icon>

    <a
      v-for="(item, i) in $route.path === '/' || $route.path === '/fr'
        ? items
        : items.filter((item) => !item.home)"
      :key="i"
      class="text-no-wrap my-2 mx-6 white--text hidden-sm-and-down"
      style="text-decoration: none;"
      @click="scrollToElement(item.route)"
      >{{ $t(item.text) }}</a
    >

    <a
      v-if="$route.path === '/' || $route.path === '/fr'"
      class="text-no-wrap py-1 px-6 accent--text hidden-sm-and-down"
      style="
        text-decoration: none;
        border-width: 1px;
        border-style: solid;
      "
      @click="scrollToElement('contact')"
      >{{ $t('navbar.contact') }}</a
    >

    <div>
      <LanguagePicker
        class="hidden-sm-and-down"
        mainColor="lightText"
      ></LanguagePicker>
    </div>
  </v-app-bar>
</template>

<script>
import languagePicker from '@/components/languagePicker';

export default {
  props: {
    drawer: Boolean,
  },
  data: () => ({
    offsetTop: 0,
    items: [
      {
        route: 'home',
        text: 'navbar.home',
      },
      {
        route: 'expertise',
        text: 'navbar.expertise',
        home: true,
      },
      {
        route: 'creations',
        text: 'navbar.creations',
        home: true,
      },
      // TO DO : update this when this tab exist
      /*{
        route: "home",
        text: "navbar.work",
      },
      {
        route: "home",
        text: "navbar.team",
      },
      */
    ],
  }),
  computed: {
    backgroundColor() {
      //const opacity = Math.min(this.offsetTop / 200, 0.6);
      const opacity = 0.6;
      return `rgba(105, 105, 105, ${opacity})`;
    },
    navbarStyle() {
      const blur = Math.min(this.offsetTop / 50, 4);
      return `z-index:20; backdrop-filter: blur(${blur}px);`;
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset;
      this.offsetTop = top;
    },
    scrollToElement(id) {
      var el = document.getElementById(id);
      el.scrollIntoView();
    },
    changeDrawerStatus() {
      this.$emit('fromChild');
    },
  },
  components: {
    LanguagePicker: languagePicker,
  },
};
</script>

<style>
.custom.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
.custom.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none;
}
.theme--light.v-select .v-select__selection--comma {
  color: inherit;
}
</style>
