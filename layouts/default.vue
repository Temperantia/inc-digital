<template>
  <v-app>
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
      <a
        style="margin-right: 150px; color: #ff9800; text-decoration: none;"
        href="#home"
      >{{$t('navbar.home')}}</a>
      <a
        style="margin-right: 150px; color: #adecf4; text-decoration: none;"
        href="#expertise"
      >{{$t('navbar.expertise')}}</a>
      <NuxtLink
        v-if="$i18n.locale === 'en'"
        :to="`/fr` + $route.fullPath"
        class="Header__Link"
        active-class="none"
        exact
      >{{ $t('links.french') }}</NuxtLink>
      <NuxtLink
        v-else
        :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        class="Header__Link"
        active-class="none"
        exact
      >{{ $t('links.english') }}</NuxtLink>
      <a style="margin-right: 100px;"></a>
    </v-toolbar>

    <v-main>
      <nuxt />
    </v-main>
    <v-footer>
      <v-container>
        <v-row></v-row>
        <v-row>
          <v-col>
            <v-divider color="black"></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="8"
            align-self="center"
          >&copy; {{ new Date().getFullYear() }} INC-Digital All Rights reserved.</v-col>
          <v-col cols="4" style="display: flex; align-items: center;">
            <span>INC-DIGITAL IS AN</span>
            <img class="mx-2" width="100" src="/inclusiveLogotype.png" />
            COMPANY
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

