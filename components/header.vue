<template>
  <v-toolbar
    flat
    dense
    color="transparent"
    width="100%"
    height="100px"
    style="position: absolute; z-index: 1;"
  >
    <v-toolbar-title>
      <v-img src="/logo_black_text.png"></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      :to="item.route"
      class="text-no-wrap my-2 mx-6 white--text"
      style="text-decoration: none; font-size:22px;"
    >{{$t(item.text)}}</NuxtLink>

    <Nuxt-link
      class="text-no-wrap py-1 px-6 accent--text"
      style="text-decoration: none;
            font-size:22px;
            border-width: 1px;
            border-style: solid;
            "
      to="/"
    >{{$t('navbar.contact')}}</Nuxt-link>

    <v-col cols="auto">
      <v-select
        class="custom mx-6 lightText--text"
        item-color="accent"
        v-model="langSelected"
        :items="langs"
        hide-details
        single-line
        style="width:130px; "
        @change="changeLang(langSelected)"
      >
        <template v-slot:prepend-inner>
          <v-icon color="lightText">mdi-web</v-icon>
        </template>
      </v-select>
    </v-col>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        route: "#home",
        text: "navbar.home",
      },
      {
        route: "#expertise",
        text: "navbar.expertise",
      },
      {
        route: "#home", //TO DO : update route
        text: "navbar.work",
      },
      {
        route: "#home", //TO DO : update route
        text: "navbar.team",
      },
    ],
    langs: ["English", "Français"],
    langSelected: "English",
  }),
  methods: {
    changeLang: function (lang) {
      switch (lang) {
        case "English":
          this.$router.push("/");
          console.log("done");
          break;

        case "Français":
          this.$router.push("/fr");
          console.log("done");
        default:
          break;
      }
    },
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