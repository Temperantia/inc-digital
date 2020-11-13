<template>
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    temporary
    app
    style="z-index: 25"
  >
    <v-list-item-group color="accent">
      <v-list-item
        v-for="(item, index) in $route.name === '/' ||
        $route.name === 'fr'
          ? items
          : items.filter((item) => !item.home)"
        :key="index"
      >
        <v-list-item-title
          @click="
            $route.name === '/' || $route.name === 'fr'
              ? scrollToElement(item.route)
              : $router.push('/')
          "
          >{{ $t(item.text) }}</v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <LanguagePicker mainColor="darken-4"></LanguagePicker>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
import languagePicker from '@/components/languagePicker';

export default {
  data() {
    return {
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
        // TODO : update this when this tab exist
        /*{
        route: "home",
        text: "navbar.work",
      },
      {
        route: "home",
        text: "navbar.team",
      },
      */
        { route: 'contact', text: 'navbar.contact', home: true },
      ],
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToElement(id) {
      this.$emit('input');

      var el = document.getElementById(id);
      el.scrollIntoView();
    },
  },
  components: {
    LanguagePicker: languagePicker,
  },
};
</script>
