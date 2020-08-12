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
          >&copy; {{ new Date().getFullYear() }} {{$t('footer.copyright')}}</v-col>
          <v-col cols="4" style="display: flex; align-items: center;">
            <span>{{$t('footer.descriptionPrefix')}}</span>
            <img class="mx-2" width="100" src="/inclusiveLogotype.png" />
            {{$t('footer.descriptionSuffix')}}
          </v-col>
        </v-row>
        <h2>Contact:</h2>

        <v-row>
          <v-col cols="12" align-self="center">
            Email:
            <a href="mailto:inclusive.corporation@gmail.com">inclusive.corporation@gmail.com</a>
          </v-col>
          <v-col cols="12" align-self="center">
            Nadir Arbia:
            <a href="tel:+33766381075">(+33) (0)7 66 38 10 75</a>
          </v-col>
          <v-col cols="12" align-self="center">
            Alexandre Du Lorier:
            <a href="tel:+33631602212">(+33) (0)6 31 60 22 12</a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

