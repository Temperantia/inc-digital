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
      <v-img src="/logo.png"></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      :to="item.route"
      class="text-no-wrap my-2 mx-6 white--text"
      style="text-decoration: none;"
    >{{$t(item.text)}}</NuxtLink>

    <Nuxt-link
      class="text-no-wrap py-1 px-6 accent--text"
      style="text-decoration: none;
            border-width: 1px;
            border-style: solid;
            "
      to="/"
    >{{$t('navbar.contact')}}</Nuxt-link>

    <NuxtLink
      v-if="$i18n.locale === 'en'"
      :to="`/fr` + $route.fullPath"
      style="margin-right: 150px; color: #adecf4; text-decoration: none;"
      active-class="none"
      exact
    >{{ $t('links.french') }}</NuxtLink>

    <NuxtLink
      v-else
      :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
      style="margin-right: 150px; color: #adecf4; text-decoration: none;"
      active-class="none"
      exact
    >{{ $t('links.english') }}</NuxtLink>
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
  }),
};
</script>